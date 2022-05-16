import Vue from "vue";
import { storage } from "./storage";
import axios from "axios";
import { Notify } from "vant";
import store from "../store";

const timeout = 10 * 1000;
const baseURL = process.env.BASE_URL;

const service = isUpload => {
  let instance = axios.create({
    timeout: timeout,
    baseURL: baseURL,
    headers: {
      "Content-Type": isUpload ? "multipart/form-data" : "application/json"
    },
    transformRequest: data => (isUpload ? data : JSON.stringify(data)),
    validateStatus: status => status >= 200 && status < 300
  });

  let beforeHandle = config => {
    if (config.anonymous) {
      return config;
    } else {
      const token = store.state.token;
      if (token && !config.headers["X-Access-Token"]) {
        config.headers["X-Access-Token"] = token;
      }
      return config;
    }
  };

  let afterHandle = error => {
    let message = "连接服务器失败";
    if (error && error.response && error.response.status) {
      let status = error.response.status;
      switch (status) {
        case 400:
          if (
            error.response.data.error &&
            error.response.data.error === "invalid_grant"
          ) {
            message = "用户名或密码错误";
          } else {
            message = "网络连接失败，请稍后再试";
          }
          break;
        case 401:
          message = "未授权，请重新登录";
          break;
        case 403:
          message = "拒绝访问，请稍后再试";
          break;
        case 404:
          message = "未找到该资源";
          break;
        case 405:
          message = "请求方法未允许";
          break;
        case 406:
          message = error.response.data.message;
          break;
        case 408:
          message = "请求超时，请稍后再试";
          break;
        case 500:
          message = "服务维护中，请稍后再试";
          break;
        case 501:
          message = "网络未实现，请稍后再试";
          break;
        case 502:
          message = "网络错误，请稍后再试";
          break;
        case 503:
          message = "服务不可用，请稍后再试";
          break;
        case 504:
          message = "网络超时，请稍后再试";
          break;
        case 505:
          message = "不支持该请求，请稍后再试";
          break;
      }
    }
    Notify({ type: "danger", message: message });
    return message;
  };

  instance.interceptors.request.use(
    config => beforeHandle(config),
    error => Promise.reject(error)
  );
  instance.interceptors.response.use(
    response => {
      // todo 200 => response.data.code = 40004 token 失效
      return Promise.resolve(response.data);
    },
    error => {
      let message = afterHandle(error);
      return Promise.reject({ message, response: error.response });
    }
  );

  return instance;
};

const http = {
  get: config => {
    config.method = "get";
    return service()(config);
  },
  post: config => {
    config.method = "post";
    return service()(config);
  },
  delete: config => {
    config.method = "delete";
    return service()(config);
  },
  put: config => {
    config.method = "put";
    return service()(config);
  },
  upload: config => {
    config.method = "post";
    return service(true)(config);
  },
  request: config => {
    return axios(config);
  }
};

Vue.prototype.$http = http;

export default http;
