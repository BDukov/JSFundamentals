function messageTranslator(input) {
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]+)\]/g;
        let line = input[i];
        let match = pattern.exec(line);
        if (match !== null) {
            let command = match[1];
            let string = match[2];
            let decripted = '';
            for (let j = 0; j < string.length; j++) {
                let char = string[j];
                char = char.charCodeAt();
                decripted += ` ${char}`;
            }
            console.log(`${command}:${decripted}`);
        } else {
            console.log('The message is invalid');
        }
    }
}
messageTranslator((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])
);