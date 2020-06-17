let num = "";
for (let i = 0; i < 190000; i++) {
    num += i;
}
console.log(parseInt("" + num.charAt(100)) *
    parseInt("" + num.charAt(1000)) *
    parseInt("" + num.charAt(10000)) *
    parseInt("" + num.charAt(100000)) *
    parseInt("" + num.charAt(1000000)));