function melrahShake(input) {

    let [text, pattern] = input;
    let output = text;
    let check = true;
    while (check) {

        if (output.includes(pattern)) {
            check = true;
            output = output.replace(pattern, "");
            console.log('Shaked it.');
        } else {
            check = false;
            console.log('No shake.');
            break;
        }
    }
    console.log(output);
}

melrahShake(['astalavista baby',
    'sta']);