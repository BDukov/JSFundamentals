function theLift(array) {

    let people = Number(array.shift());
    let wagons = array.toString().split(' ');
    let result = [];
    let isEmptySpace = false;

    for (let i = 0; i < wagons.length; i++) {
        let currentWagon = Number(wagons[i]);
        while ((currentWagon !== 4)) {
            if (people === 0) { break; }
            currentWagon++;
            people--;
        }
        result.push(currentWagon);
    }
    if (result[result.length - 1] != 4) {
        isEmptySpace = true;
    }
    if (people == 0 && isEmptySpace) {
        console.log(`The lift has empty spots!`);
        console.log(result.join(' '));
    }
    if (people != 0 && !isEmptySpace) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(result.join(' '));
    }
    if (people == 0 && !isEmptySpace) {
        console.log(result.join(' '));
    }
}
// theLift([
//     "15",
//     "0 0 0 0 0"
// ]);
theLift([
    "20",
    "0 2 0"
]);   