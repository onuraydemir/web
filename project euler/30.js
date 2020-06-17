function basamaklariGetir(sayi) {
    let digitCount = 0;
    let digits = [];
    let tempSayi = sayi;
    let secondTempSayi = sayi;
    while (tempSayi > 1) {
        tempSayi = tempSayi / 10;
        digitCount++;
    }
    for (let i = 1, j = 0; i < digitCount + 1; i++) {
        if (digits[j] != undefined) {
            secondTempSayi -= digits[j];
            digits.push(Math.floor((secondTempSayi % (10 ** i)) / (10 ** (i - 1))));
            j++;
        }
        else {
            digits.push(secondTempSayi % (10 ** i))
        }
    }

    return digits;
}
//console.log(basamaklariGetir(4234))

function fifthPowerOfDigits(sayi) {
    let basamaklar = basamaklariGetir(sayi);
    let b = basamaklar.reduce((accu, curVal) => {
        return accu += Math.pow(curVal, 5)
    }, 0)
    return b;
}

let maxSearch = 5 * (Math.pow(9, 5))
let sum = 0;
for (let i = 2; i < maxSearch; i++) {
    if (i == fifthPowerOfDigits(i))
        sum += i;
}
console.log(sum)

