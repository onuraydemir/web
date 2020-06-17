var minimumAbsDifference = function (arr) {
    let minimum = Number.MAX_SAFE_INTEGER;
    let result = new Map();
    arr.sort((a, b) => a - b);
    arr.forEach((el, i) => {
        let fark = Math.min(minimum, (arr[i + 1] - el));
        let mapKey = arr[i + 1] - el;
        let prevResult = result.get(fark);
        if (minimum > fark) {
            minimum = fark;
        }
        if (prevResult) {
            result.set(mapKey, [...prevResult, [arr[i], arr[i + 1]]]);
        }
        else {
            result.set(mapKey, [[arr[i], arr[i + 1]]]);
        }
    })
    return result.get(minimum);
};
