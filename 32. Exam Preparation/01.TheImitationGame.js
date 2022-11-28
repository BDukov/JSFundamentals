function theImitationGame(input) {

    let arr = input.slice();
    let text = arr.shift();
    let tempMessage = '';
    let line = arr.shift();

    while (line !== 'Decode') {
        let currentLine = line.split('|');
        let command = currentLine[0];

        switch (command) {
            case 'Move':
                let numberOfLetters = Number(currentLine[1]);
                let lettersToMove = text.substring(0, numberOfLetters);
                tempMessage = text.replace(lettersToMove, '');
                tempMessage += lettersToMove;
                text = tempMessage;
                break;

            case 'Insert':
                let index = Number(currentLine[1]);
                let value = currentLine[2];
                tempMessage = text.split('');
                tempMessage.splice(index, 0, value);
                text = tempMessage.join('');
                break;

            case 'ChangeAll':
                let substring = currentLine[1];
                let replacement = currentLine[2];

                while (text.includes(substring)) {
                    tempMessage = text.replace(substring, replacement);
                    text = tempMessage;
                }
                break;
        }

        line = arr.shift();
    }
    console.log(`The decrypted message is: ${text}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);