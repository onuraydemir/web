var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
let totient = (n) => {
    let num = 0;
    for (let i = 0; i < n; i++) {
        if (gcd(n, i) === 1) {
            num++;
        }
    }
    return num;
};

function isPermutation(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    return a.split("").sort().join() === b.split("").sort().join();
}

let results = [];
for (let i = 1; i < 1000000; i++) {
    let totientI = totient(i);
    if (isPermutation(i.toString(), totientI.toString())) {
        results.push([i, i / totientI]);
    };
}

results.sort((a, b) => a[1] - b)
let solution = results[0];
document.write(solution + " solution");
