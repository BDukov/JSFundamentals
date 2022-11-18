function serializeString(input) {
    input = input[0];
    let output = {};

    for (let i = 0; i < input.length; i++) {
        let currentLetter = input[i];
        if (!output.hasOwnProperty(input[i])) {
            output[currentLetter] = [i];
        } else {
            output[currentLetter].push(i);
        }
    }

    for (let key in output) {
        console.log(`${key}:${output[key].join('/')}`);
    }
}
serializeString(["abababa"]);
console.log('-------------');
serializeString(["avjavamsdmcalsdm"]);