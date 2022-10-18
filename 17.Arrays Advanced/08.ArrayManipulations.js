function arrayManipulations(array) {

    // •	Add {number}: add a number to the end of the array
    // •	Remove {number}: remove all occurrences of a particular number from the array
    // •	RemoveAt {index}: removes number at a given index
    // •	Insert {number} {index}: inserts a number at a given index

    let newArray = array
        .shift()
        .split(' ')
        .map(Number); // get the numbers in array

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' '); // get the command and separate by distance
        let command = currentCommand[0]; //the first part is command
        let firstNum = Number(currentCommand[1]);  // the second part is number
        let secondNum = Number(currentCommand[2]); // the third part number too

        switch (command) {
            case 'Add':
                newArray.push(firstNum);
                break;
            case 'Remove':
                newArray = newArray.filter((el) => el !== firstNum);
                break;
            case 'RemoveAt':
                newArray.splice(firstNum, 1);
                break;
            case 'Insert':
                newArray.splice(secondNum, 0, firstNum);
                break;

            default:
                break;
        }
    }
    console.log(newArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);