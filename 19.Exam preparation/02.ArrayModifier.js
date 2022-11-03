function arrayModiier(array) {

    let modifiedArray = array.shift().split(' ').map(Number);

    while (array[0] !== 'end') {
        let currentCommand = array.shift().split(' ');
        let command = currentCommand[0];
        let firstIndex = Number(currentCommand[1]);
        let secondIndex = Number(currentCommand[2]);

        switch (command) {
            case 'swap':
                let temporaryPosition = modifiedArray[firstIndex];
                modifiedArray[firstIndex] = modifiedArray[secondIndex];
                modifiedArray[secondIndex] = temporaryPosition;
                break;
            case 'multiply':
                modifiedArray[firstIndex] *= modifiedArray[secondIndex];
                break;
            case 'decrease':
                for (let i = 0; i < modifiedArray.length; i++) {
                    modifiedArray[i]--;
                }
                break;

        }
    }
    console.log(modifiedArray.join(', '));
}
arrayModiier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);