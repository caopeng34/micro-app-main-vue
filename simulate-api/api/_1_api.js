const COMMON = require("./common");

/**
 * 查询人员数据集
 */
exports.getdata1 = function (parameter, body) {
    let pageNo = parameter.pageNo || 0
    let pageSize = parameter.pageSize || 10
    let list = []
    let total = 36
    if (pageNo * pageSize < total) {
        let size = (pageNo + 1) * pageSize > total ? total : (pageNo + 1) * pageSize
        for (let i = pageNo * pageSize; i < size; i++) {
            let index = i + 1
            let id = COMMON.RANDOMSTR(64)
            let name = COMMON.RANDOMNAME()
            let idno = COMMON.RANDOMIDNO()
            let birthday = COMMON.IDNOTOBIRTHDAY(idno)
            let sex = COMMON.IDNOTOSEX(idno)
            let moble = COMMON.RANDOMMOBLE()
            let bank = COMMON.RANDOMBANK()

            list.push({
                "idx": index,
                "id": id,
                "name": name,
                "idno": idno,
                "birthday": birthday,
                "sex": sex,
                "moble": moble,
                "bank": bank,
            })
        }
    }
    return COMMON.RES({info: {params: parameter, body: body, list: list, total: total}})
}

/**
 * 查询日期数据集
 */
exports.getdata2 = function (parameter, body) {
    let list = []
    let datelist = COMMON.DATELIST(null, null, 14) || []
    datelist.forEach((item,index) => {
        list.push({
            index: index + 1,
            id: COMMON.RANDOMSTR(64),
            date: item,
            num: COMMON.RANDOMNUM(50,100)
        })
    })
    return COMMON.RES({info: {params: parameter, body: body, list: list}})
}
