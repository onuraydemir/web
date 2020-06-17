/*function factorial(n) {
    let sum = 1;
    for (let i = n; i > 0; i--) {
        sum *= i;
    }
    return sum;
}

function digitCount(x) {
    let digitCount = 0;
    let num = x;
    while (num > 0) {
        num = Math.floor(num / 10);
        digitCount++;
    }
    return digitCount;
}

function digitSum(n) {
    let nDigits = digitCount(n);
    let number = n;
    let sonuc = [];
    for (let i = 1; i <= nDigits; i++) {
        sonuc.push((number % (10 ** i)));
        number -= number % (10 ** i);
    }

    sonuc = sonuc.filter((x) => {
        if (x === 0) return false;
        return x;
    })

    return sonuc;
}

//let sayi = factorial(100);
//let sayiArr = (digitSum(sayi))

*/

/*
let sum = 0;
for (let i = 0; i < sayiArr.length; i++) {
    let x = sayiArr[i];
    console.log(x)
    x = (x / (10 ** (digitCount(x) - 1)))
    sum += x;
    console.log(sum)
}
*/



function bigFactorial(n) {
    let sum = 1n;
    for (let i = n; i > 0; i--) {
        sum *= BigInt(i);
    }
    return sum;
}
function bigDigitCount(x) {
    let digitCount = 0n;
    let num = x;
    while (num > 0) {
        num = num / 10n;
        digitCount++;
    }
    return digitCount;
}
function bigDigitSum(n) {
    let nDigits = bigDigitCount(n + 0n);
    let number = n;
    let sonuc = [];
    for (let i = 1n; i <= nDigits; i++) {
        sonuc.push((number % (10n ** i)));
        number -= number % (10n ** i);
    }

    sonuc = sonuc.filter((x) => {
        if (x === 0) return false;
        return x;
    })

    return sonuc;
}



let sayi = bigFactorial(100n);
let sayiArr = (bigDigitSum(sayi + 0n))


let sum = 0n;
for (let i = 0n; i < sayiArr.length; i++) {
    let x = sayiArr[i];
    x = (x / (10n ** (bigDigitCount(x) - 1n)))
    sum += x;
    console.log(sum)
}


