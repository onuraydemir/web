var reverseBits = function (sayi) {
    var toplam = 0;
    for (var i = 0; i < 32; i++) {
        var kalan = sayi & 1;
        toplam = (toplam += toplam) + kalan;
        sayi = (sayi - kalan) >> 1;
    }
    return toplam;
};