function valueOfAString(input) {

    let text = input[0];
    let type = input[1];
    let points = 0;

    if (type === 'LOWERCASE') {
        for (let char of text) {
            if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                let currentPoints = char.charCodeAt();
                points += currentPoints
            }
        }
    } else if (type === 'UPPERCASE') {
        for (let char of text) {
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
                let currentPoints = char.charCodeAt();
                points += currentPoints
            }
        }
    }
    console.log(`The total sum is: ${points}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);
console.log(`--------------------`);
valueOfAString(['AC/DC',
    'UPPERCASE']);