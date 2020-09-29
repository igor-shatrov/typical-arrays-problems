exports.min = function min(array) {
    let min = Infinity
    if (arguments.length === 0 || array[0] == undefined) {
        return 0
    }
    array.forEach(element => {
        if (element < min) {
            min = element
        }
    });
    return min
}

exports.max = function max(array) {
    let max = -Infinity
    if (arguments.length === 0 || array[0] == undefined) {
        return 0
    }
    array.forEach(element => {
        if (element > max) {
            max = element
        }
    });
    return max
}

exports.avg = function avg(array) {
    let sum = 0
    if (arguments.length === 0 || array[0] == undefined) {
        return 0
    }
    array.forEach(element => {
        sum += element
    })
    return sum / array.length;
}