function rageQuit(input) {

    let pattern = /(?<char>\D+)+(?<digit>[0-9]+)/g;
    let filtered = pattern.exec(input);
    let output = '';

    while (filtered) {
        let toUpperCase = filtered[1].toUpperCase();
        if(filtered[2] <= 20){
        for (let i = 0; i < filtered[2]; i++) {
            output += toUpperCase;
        }
    }         
        filtered = pattern.exec(input);
    }
    console.log(`Unique symbols used: ${[... new Set(output)].length}`);
    console.log(output);
}

rageQuit('a3');

console.log(`--------------`);

rageQuit('aSd2&5s@1');

console.log(`--------------`);
