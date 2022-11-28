function emojiDetector(input) {
    //input
    let text = input.shift();
    let emojiCount = 0;
    let threshold = 1;
    let coolEmojies = [];

    //get all digits
    let digitsResult = text.match(/\d/g);
    for (const digit of digitsResult) {
        let number = Number(digit);
        threshold *= number;
    }

    //calculate teshold

    //get all emojis
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g);

    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.word;
        emojiCount++;
        //calculate emoji coolnes
        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }

        if (emojiCoolnes >= threshold) {
            coolEmojies.push(emoji);
        }
    }
    //print cool emojis
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmojies) {
        console.log(emoji);
    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);