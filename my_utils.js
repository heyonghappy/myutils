var _isSomeType = function (obj, typeString) { 
    if(arguments.length!=2||typeof typeString !=='string')  return false;
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() === String(typeString).toLowerCase()
}