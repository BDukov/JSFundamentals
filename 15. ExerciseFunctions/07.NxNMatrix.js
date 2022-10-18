function nXMmatrix(number){

    let rowGenerator = () => {

    for(let i = 1; i <= number; i++){
        let singleRow = '';
        for(let k = 1; k <= number; k++){
            singleRow += `${number} `;
        }
        return singleRow;
    };
    }
    for (let i = 1; i <= number; i++){
        console.log(rowGenerator());
    }
}
nXMmatrix(3)