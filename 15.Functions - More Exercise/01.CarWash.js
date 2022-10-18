function carWash(array) {

    let sum = 0;
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let command = array[i];
        switch (command) {
            case 'soap': sum += 10; break;
            case 'water': sum = sum * 1.2; break;
            case 'vacuum cleaner': sum *= 1.25; break;
            case 'mud': sum *= 0.9; break;
        }
    }

    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);