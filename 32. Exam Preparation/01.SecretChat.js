function secretChat(input) {
    let text = input.shift();
    let line = input.shift();

    while (line !== 'Reveal') {
        let currentLine = line.split(':|:');
        let command = currentLine[0];

        switch (command) {
            case 'ChangeAll':
                let substring = currentLine[1];
                let replace = currentLine[2];
                text = text.split(substring).join(replace);
                console.log(text);
                break;

            case 'Reverse':
                let subForReverse = currentLine[1];
                let index = text.indexOf(subForReverse);
                if (text.includes(subForReverse)) {
                    subForReverse = text.slice(index, index + subForReverse.length);
                    let reversedSubstring = subForReverse.split('').reverse().join('');
                    let firstParth = text.slice(0, index);
                    let lastParth = text.slice(index + subForReverse.length, text.length);
                    text = firstParth + lastParth + reversedSubstring;
                    console.log(text);
                } else {
                    console.log('error');
                }
                break;

            case 'InsertSpace':
                let emptySpaceIndex = Number(currentLine[1]);
                let firstPart = text.slice(0, emptySpaceIndex);
                let secondPart = text.slice(emptySpaceIndex, text.length);
                text = firstPart + ' ' + secondPart;
                console.log(text);
                break;
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${text}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);