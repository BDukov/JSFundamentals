function houseParty(arr) {

    let guessArray = [];

    for (const el of arr) {

        let command = el.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (guessArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guessArray.push(name);
            }
        } else {
            if (!guessArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guessArray.indexOf(name);
                guessArray.splice(index, 1);
            }
        }
    }
    console.log(guessArray.join(`\n`)); //обединяваме ги във стринг по нов ред ! ! ! 
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
