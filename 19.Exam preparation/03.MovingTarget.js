function movingTarget(input) {

    let targets = input.shift().split(' ').map(x => Number(x));

    let currentLine = input.shift();

    while (currentLine != 'End') {

        let lineArr = currentLine.split(' ');
        let command = lineArr[0];
        let index = Number(lineArr[1]);
        let power = Number(lineArr[2]);

        switch (command) {
            case 'Shoot':
                //if index exists
                if (targets[index]) {
                    targets[index] -= power;
                    //remove if shot
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            //shoot target
            case 'Add':
                //if(targets.length > index){
                if (targets[index]) {
                    targets.splice(index, 0, power); //вмъква power на идекс-а измества останалите с 1 назад
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case 'Strike':
                const radius = power;
                const lowerIndex = index - radius;
                const upperIndex = index + radius;

                if (targets[lowerIndex] && targets[upperIndex]) {
                    targets.splice(lowerIndex, radius * 2 + 1);
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }
        currentLine = input.shift();
    }
    console.log(targets.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);
