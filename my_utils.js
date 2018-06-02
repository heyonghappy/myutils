var _isSomeType = function (obj, typeString) { 
    if(arguments.length!=2||typeof typeString !=='string')  return false;
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() === String(typeString).toLowerCase()
}


var search_pattern = function(search_term){

    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]", "g");
    var reg_str = /./;
    reg_str.compile(search_term.replace(/\\/g, '\\\\').replace(pattern, function (x) { return "\\" + x }))
    return reg_str;
}
moudle.exports={
    _isSomeType:_isSomeType,
    search_pattern:search_pattern
}