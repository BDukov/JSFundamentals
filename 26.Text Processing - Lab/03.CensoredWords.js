function consoredWords(text, word) {

    let censored = text;
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }
    console.log(censored);
}
consoredWords('A small sentence with some words', 'small');