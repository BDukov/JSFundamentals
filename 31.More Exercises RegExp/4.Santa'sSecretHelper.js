function santaHelper(input) {
    let key = Number(input.shift());
    let line = input.shift();

    while (line !== 'end') {
        let array = line.split('');
        let newLine = '';

        array.forEach(char => {
            let letterInAscii = char.charCodeAt();
            letterInAscii -= key;
            let asciiToLetter = String.fromCharCode(letterInAscii);
            newLine += asciiToLetter;
        });
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[G|N])!/g;

        let filteredLine = pattern.exec(newLine);
        if (filteredLine !== null) {
            let childrenName = filteredLine.groups.name;
            let behavior = filteredLine.groups.behavior;

            if (behavior === 'G') {
                console.log(childrenName);
            }
        }
        line = input.shift();
    }
}

// santaHelper(['3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejnW$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end']
// );

// santaHelper(['3',
// 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
// 'ppqmkkkmnolmnnCEhq/vkievk$Q$',
// 'yyegiivoguCYdohqwlqh/kguimhk$J$',
// 'end']);

santaHelper(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'WonvfkmwzkmpwvzkmlhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'])