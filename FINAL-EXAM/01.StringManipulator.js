function stringManipulator(input) {

    let text = input.shift();

    while (input[0] !== 'End') {
        let line = input.shift().split(' ');
        let command = line[0];

        if (command === 'Translate') {
            let char = line[1];
            let replacement = line[2];
            text = text.split(char).join(replacement);
            console.log(text);
        } else if (command === 'Includes') {
            let substring = line[1];
            if (text.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Start') {
            let substring = line[1];
            let hasStart = text.indexOf(substring);
            if (hasStart == 0) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Lowercase') {
            text = text.toLowerCase();
            console.log(text);
        } else if (command === 'FindIndex') {
            let char = line[1];
            let lastIndex = text.lastIndexOf(char);
            console.log(lastIndex);
        } else if (command === 'Remove') {
            let startIndex = Number(line[1]);
            let count = Number(line[2]);
            let textArr = text.split('');
            textArr.splice(startIndex, count);
            text = textArr.join('');
            console.log(text);
        }
    }
}
stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]);