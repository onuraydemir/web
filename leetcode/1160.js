var countCharacters = function (words, chars) {
    var result = words.filter(word => {
        let charsCopy = chars.split("");
        let wordCopy = word.split("");
        let isGood = true;
        for (char of wordCopy) {
            if (!isGood) return;
            charsCopy.includes(char) ? charsCopy.splice(charsCopy.indexOf(char), 1) : isGood = false;
        }
        return isGood;
    }).join('');

    return result.length;
};