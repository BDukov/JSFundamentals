function stringSubstring(word, text) {

    const textArr = text.split(' ');

    for (const token of textArr) {
        if (token.toLowerCase() === word.toLowerCase()) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);