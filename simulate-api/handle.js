const api1 = require("./api/_1_api");

// handle 保存不同请求路径对应的处理方法
const handle = {
    "/": rooturl,
    "/api1/getdata1": api1.getdata1,
    "/api1/getdata2": api1.getdata2,
};

function rooturl() {
    let res = '\n\n接口列表：\n'
    Object.keys(handle).forEach(item => {
        res += '' + 'http://127.0.0.1:' + port + item + '\n'
    })
    return res
}

const port = 7777

exports.handle = handle;
exports.port = port;
