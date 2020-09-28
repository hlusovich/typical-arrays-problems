
exports.min = function min (array) {
    if(array===undefined||array.length===0) return 0;
    return Math.min(...array)

}

exports.max = function max (array) {
    if(array===undefined||array.length===0) return 0;
    return Math.max(...array)
}

exports.avg =  function avg (array) {
    if(array===undefined||array.length===0) return 0;
    let mediana  = array.reduce((cur,acc)=>cur+acc,0)/(array.length-1);
    let[integer,float]=mediana.toString().split(".");
    return (integer+float.slice(0,1))/10
}

