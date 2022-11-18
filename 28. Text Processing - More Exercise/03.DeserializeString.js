function deserializeString(input) {

    let output = [];

    while (input[0] !== 'end') {

        let [letter, indexes] = input.shift().split(':');
        indexes = indexes.split('/');

        indexes.forEach(index => {
            index = Number(index);
            for (let a = 0; a <= index; a++) {
                if (a === index) {
                    output.splice(index, 1, letter);
                } else {
                    output.push('*');
                }
            }
        });
    }
    output = output.filter(el => el !== '*');
    console.log(output.join(''));
}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
console.log('-------------');
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);