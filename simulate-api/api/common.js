/**
 *  出参定义
 */
exports.RES = function (obj) {
    let res = new Object()
    res.code = 0
    res.msg = 'success'
    res.info = {}
    if (obj) {
        obj.code ? res.code = obj.code : ''
        obj.msg ? res.msg = obj.msg : ''
        obj.info ? res.info = obj.info : ''
    }
    return res
}

/**
 *  随机字符串生成器
 */
exports.RANDOMSTR = function (length) {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = length; i > 0; --i)
        result += str[Math.floor(Math.random() * str.length)]
    return result
}

/**
 *  随机数字生成器
 */
exports.RANDOMNUM = function (startnum, endnum) {
    let num1 = typeof startnum === "number" && startnum > 0 ? startnum : 0
    let num2 = typeof endnum === "number" && endnum > 0 ? endnum : 9
    if (num1 > num2) {
        let tmp = num1
        num1 = num2
        num2 = tmp
    }
    let result = Math.floor(num1 + Math.random() * (num2 - num1))
    return result
}

/**
 *  随机汉字姓名生成器
 */
exports.RANDOMNAME = function () {
    let familyNames = new Array(
        "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
        "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
        "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
        "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    let givenNames = new Array(
        "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );

    let i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    let familyName = familyNames[i];

    let j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    let givenName = givenNames[j];

    let name = familyName + givenName;

    return name;
}

/**
 *  随机手机号生成器
 */
exports.RANDOMMOBLE = function () {

    let prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    let i = parseInt(10 * Math.random());
    let prefix = prefixArray[i];

    for (let j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }

    return prefix;
}

/**
 *  随机身份证号生成器
 */
exports.RANDOMIDNO = function () {
    let coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];// 加权因子
    let lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];// 校验码
    let address = "130403"; // 住址
    let birthday = "19910824"; // 生日
    let s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    let array = (address + birthday + s).split("");
    let total = 0;
    for (let i in array) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    let lastNumber = lastNumberArray[parseInt(total % 11)];
    let id_no_String = address + birthday + s + lastNumber;

    return id_no_String;
}

/**
 *  随机银行卡号生成器
 */
exports.RANDOMBANK = function (bank_no = "0102") {

    let prefix = "";
    switch (bank_no) {
        case "0102":
            prefix = "622202";
            break;
        case "0103":
            prefix = "622848";
            break;
        case "0105":
            prefix = "622700";
            break;
        case "0301":
            prefix = "622262";
            break;
        case "104":
            prefix = "621661";
            break;
        case "0303":
            prefix = "622666";
            break;
        case "305":
            prefix = "622622";
            break;
        case "0306":
            prefix = "622556";
            break;
        case "0308":
            prefix = "622588";
            break;
        case "0410":
            prefix = "622155";
            break;
        case "302":
            prefix = "622689";
            break;
        case "304":
            prefix = "622630";
            break;
        case "309":
            prefix = "622908";
            break;
        case "310":
            prefix = "621717";
            break;
        case "315":
            prefix = "622323";
            break;
        case "316":
            prefix = "622309";
            break;
        default:
    }

    for (let j = 0; j < 13; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }

    return prefix;
}

/**
 *  身份证号转出生日期
 */
exports.IDNOTOBIRTHDAY = function (card) {
    if (!card) {
        return '';
    }
    let len = card.length;
    // 身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
    if (len === 15) {
        let re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
        let arr_data = card.match(re_fifteen); // 正则取号码内所含出年月日数据
        let year = arr_data[2];
        let month = arr_data[3];
        let day = arr_data[4];
        return '19' + year + '-' + month + '-' + day;
    }
    // 身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
    else if (len === 18) {
        let re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
        let arr_data = card.match(re_eighteen); // 正则取号码内所含出年月日数据
        let year = arr_data[2];
        let month = arr_data[3];
        let day = arr_data[4];
        return year + '-' + month + '-' + day;
    }
    // 其他
    else {
        return '';
    }
}

/**
 *  身份证号转性别
 */
exports.IDNOTOSEX = function (card) {
    if (!card) {
        return '';
    }
    let len = card.length;
    let card18 = ''
    // 身份证15位时
    if (len === 15) {
        let arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        let arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        let cardTemp = 0, i;
        card18 = card;
        card18 = card18.substr(0, 6) + '19' + card18.substr(6, card18.length - 6);
        for (i = 0; i < 17; i++) {
            cardTemp += card18.substr(i, 1) * arrInt[i];
        }
        card18 += arrCh[cardTemp % 11];
    }
    // 身份证18位时
    else if (len === 18) {
        card18 = card;
    }
    // 其他
    else {
        return '';
    }
    let sex = ''
    if (parseInt(card18.charAt(16)) % 2 === 0) {
        sex = "2"; // 女生
    } else {
        sex = "1"; // 男生
    }
    return sex;
}

/**
 * 生成连续日期
 */
exports.DATELIST = function (beginDate, endDate, days) {
    let date1 = beginDate instanceof Date ? beginDate : null
    let date2 = endDate instanceof Date ? endDate : null
    let num = (typeof days === "number" && days > 0) ? days : 1
    let list = []
    if (date1 !== null && date2 !== null) {
        if (date1 > date2) {
            let tmp = date1
            date1 = date2
            date2 = tmp
        }
    } else if (date1 !== null && date2 === null) {
        date2 = new Date(date1.getTime() + 1000 * 60 * 60 * 24 * (num - 1))
    } else if (date1 === null && date2 !== null) {
        date1 = new Date(date2.getTime() - 1000 * 60 * 60 * 24 * (num - 1))
    } else {
        date2 = new Date()
        date1 = new Date(date2.getTime() - 1000 * 60 * 60 * 24 * (num - 1))
    }
    date1.setHours(0, 0, 0, 0)
    date2.setHours(0, 0, 0, 0)
    date1 = date1.getTime()
    date2 = date2.getTime()
    let tmpdate = new Date(date1).getTime()
    while (date2 >= date1 && date2 >= tmpdate) {
        list.push(datetostr(new Date(tmpdate)))
        tmpdate = new Date(tmpdate + 1000 * 60 * 60 * 24).getTime()
    }
    return list;

    // 日期转字符串
    function datetostr(date) {
        let vdate = date instanceof Date ? new Date(date) : new Date()
        let year = vdate.getFullYear()
        let month = (vdate.getMonth() + 1)
        let datey = vdate.getDate()
        month = month < 10 ? '0' + month : month
        datey = datey < 10 ? '0' + datey : datey
        return year + '-' + month + '-' + datey
    }

    // 字符串转日期
    function strtodate(str) {
        let vstr = (typeof str === "string" && str.split('-').length === 3) ? str : null
        let res = vstr ? new Date(vstr.replace(/-/g, '/')) : null
        return res instanceof Date ? res : new Date()
    }
}
