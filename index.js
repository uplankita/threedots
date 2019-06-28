module.exports = function threedots(string,number)
{
    if (typeof string !== "string") throw new TypeError("Expected a string but got an "+typeof string);
    if (typeof number !== "number") throw new TypeError("Expected a number but got an "+typeof number);
    let round= Math.round(number);
    return string.substring(0,round-1) + string.length > round ?  '...':null;

}