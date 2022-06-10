const http = require("http");
const url = require("url");
const querystring = require('querystring');
const handlejs = require("./handle");
const handle = handlejs.handle;

function route(handle, pathname, parameter, body) {
    // console.log("==>route request<== " + pathname + '===>>>' + JSON.stringify(parameter));

    // 检查给定的路径对应的请求处理程序是否存在，如果存在的话直接调用相应的函数
    if (typeof handle[pathname] == "function") {
        return handle[pathname](parameter, body);
    } else {
        console.log("==>Invalid request<==" + pathname);
        return false
    }
}

// 调用路由对应方法
function callRouteFunction(method, route, handle, pathname, parameter, body, response) {
    console.log("==>Request <==" + (method + '    ').substr(0, 4) + '==>>' + (pathname + '                    ').substr(0, 20) + '==>>' + JSON.stringify({
        "param": parameter,
        "body": body
    }));

    // 路由器处理
    let result = route(handle, pathname, parameter, body);
    if (result) {
        let resp = ''
        if (typeof result === "string") {
            resp = result;
        } else if (typeof result === "object") {
            resp = JSON.stringify(result);
        } else {
            resp = result.toString();
        }
        console.log("==>Response<==200 ==>>" + (pathname + '                    ').substr(0, 20) + '==>>' + resp)
        // 返回数据
        response.writeHead(200, {"Content-type": "text/plain;charset=utf-8"});
        response.write(resp);
        response.end();
    } else {
        console.log("==>Response<==500 ==>>" + (pathname + '                    ').substr(0, 20) + '==>>' + result)
        response.writeHead(500, {"Content-type": "text/plain;charset=utf-8"});
        response.end();
    }
}

// 启动服务
http.createServer(function (request, response) {
    try {
        // 获取请求路径
        let pathname = url.parse(request.url).pathname;

        // 关闭nodejs 默认访问 favicon.ico
        if (!pathname.indexOf('/favicon.ico')) {
            return;
        }
        // 请求方法
        let method = request.method
        // 请求参数
        let parameter = url.parse(request.url, true).query;

        // 收到来自 pathname 的请求
        // console.log("==>Request <==" + (method + '    ').substr(0,4) + '==>>' + (pathname + '                    ').substr(0,20) + '==>>' + parameter);

        switch (method) {
            case "GET" : {
                // 调用路由对应方法
                callRouteFunction(method, route, handle, pathname, parameter, {}, response)
            }
                break;
            case "POST" : {
                //创建空字符叠加数据片段
                let bodydata = '';
                request.on('data', chunk => {
                    // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
                    bodydata += chunk;
                })
                request.on('end', () => {
                    //（1）.对url进行解码（url会对中文进行编码）
                    bodydata = decodeURI(bodydata);
                    // console.log(bodydata);
                    //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
                    //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
                    // post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象
                    let dataObject = querystring.parse(bodydata);
                    // console.log(dataObject);
                    // 调用路由对应方法
                    callRouteFunction(method, route, handle, pathname, parameter, dataObject, response)
                })
            }
                break;
            default : {
                // 调用路由对应方法
                callRouteFunction(method, route, handle, pathname, parameter, {}, response)
            }
        }
    } catch (e) {
        console.log(e.message)
    }

}).listen(handlejs.port)

// 终端打印信息
console.log(`Server running at http://127.0.0.1:${handlejs.port}/`)
