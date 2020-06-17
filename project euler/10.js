function soru10() {
  let testEdilecekEnYuksekSayi = 2e+6; //2e + 6 = 2 milyon eder. 2 * 10 uzeri 6, scientific notation
  let tempTestEdilecekEnYuksekSayi = testEdilecekEnYuksekSayi; //geçici değere atadım
  let sayi = 0;

  while (tempTestEdilecekEnYuksekSayi >= 2) { //bu koşulla, 2 milyondan başlatıp 2'den aşağı düşene kadar sayıları test edeceğiz
    if (asalSayidir(tempTestEdilecekEnYuksekSayi) === true) {
      sayi += tempTestEdilecekEnYuksekSayi;
    }

    tempTestEdilecekEnYuksekSayi--;
  }

  function asalSayidir(n) {
    let x = Math.floor(Math.sqrt(n)); //sayının prime(asal) olup olmadığını bulmak için bölmeye başlamamız gerek. karakökü değeri ve altındaki değerler zaten bütün çarpanlarını vereceği için daha büyük sayıları da bölmeye gerek yok.sayının integer olarak kalması için math.floor yaptım.
    let tempX = x; //loop içerisinde x'tempTestEdilecekEnYuksekSayi değiştireceğiz, kafamızı karıştırmaması için burada yeni bir değere atayalım o yüzden

    while (tempX >= 2) {
      if (n % tempX === 0) {
        return false; // Eğer sayı tempX değişkenine tam dönüyorsa, prime sayı değildir. false döndürerek çıkış yap
      }
      tempX--; //tempX'i bir düşürerek tempX 0 olana kadar bütün sayıları deniyoruz
    }

    return true; //loop tamamlandığında, eğer buraya erişebilmişsek böleni yoktur demektir. yaaani asal sayıdır.
  }
  return sayi;
}

console.log(soru10())