exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let min = array[0];
    array.forEach(i => {
        if (i < min) min = i;
    })
    return min
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let max = array[0];
    array.forEach(i => {
        if (i > max) max = i;
    })
    return max
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((acc, i) => {
        return acc + i
    }) / array.length

}
