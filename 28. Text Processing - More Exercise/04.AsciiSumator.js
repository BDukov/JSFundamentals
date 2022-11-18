function asciiSumator(input) {

    let firstChar = input[0].charCodeAt();
    let lastChar = input[1].charCodeAt();

    let start = Math.min(firstChar, lastChar);
    let end = Math.max(firstChar, lastChar);

    let text = input.pop().split('');
    let points = 0;

    for (let char of text) {
        if (char.charCodeAt() > start && char.charCodeAt() < end) {
            let currentPoints = char.charCodeAt();
            points += currentPoints;
        }
    }
    console.log(points);
}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);