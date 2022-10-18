function printElement(array) {

    let step = array[array.length - 1];
    let output = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (i % step == 0) {
            output.push(array[i]);
        }
    }
    console.log(output.join(' '));
}
printElement(['5', '20', '31', '4', '20', '2']);