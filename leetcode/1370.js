var sortString = function (string) {
    let result = "";
    let tempS = string.split("");
    tempS.sort();
    let set = createNewSet(tempS);
    for (; tempS.length > 0;) {
        for (let i of set) {
            result = merge(result, i)
            cut(tempS, i);
        }
        set = createNewSet(tempS);
        for (let j of set.reverse()) {
            result = merge(result, j)
            cut(tempS, j);
        }
        set = createNewSet(tempS);
    }
    return result;
};


function cut(arr, i) {
    arr.splice(arr.indexOf(i), 1);
}

function createNewSet(arr) {
    let tempSet = new Set(arr)
    return Array.from(tempSet);
}
function merge(x, y) {
    return x = x.concat(y)
}