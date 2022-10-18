function bunnyKill(array){

    let bombCells = array.pop().split(' ').map((str) => str.split(',').map((x) => Number(x)));

    let matrix = array.map((row) => row.split(' ').map((x) => Number(x)));

    let damage = 0;
    let killCounter = 0;

    for (let i = 0; i < bombCells.length; i++){
        let bombRow = bombCells[i][0];
        let bombCol = bombCells[i][1];
        let bombValue = matrix[bombCol][bombCol];

        if (bombValue <= 0){
            continue;
        }

        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1; array.length - 1);
    }
    console.log(test);

}

bunnyKill(
['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']);