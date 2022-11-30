function mirrorWords(text) {
    let pattern = /(?<char>[@|#])(?<word>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;

    let matches = pattern.exec(text);
    let mirrorWordsList = [];
    let validPairs = 0;

    while (matches !== null) {
        validPairs++;
        let firstWord = matches.groups['word'];
        let secondWord = matches.groups['secondWord'];
        let reversedWord = secondWord.split('').reverse().join('');
        if (firstWord === reversedWord) {
            mirrorWordsList.push(`${firstWord} <=> ${secondWord}`);
        }
        matches = pattern.exec(text);
    }

    if (validPairs === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${validPairs} word pairs found!`);
    }

    if (mirrorWordsList.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWordsList.join(', '));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log(`---------`);
// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
console.log(`---------`);
// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);