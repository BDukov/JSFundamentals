function formatGrade(grade){
    let formattedGrade = "";

    if (grade < 3){
        formattedGrade = 'Fail';
        grade = 2;
    } else if (grade < 3.5) {
        formattedGrade = 'Poor';
    } else if (grade < 4.5) {
        formattedGrade = 'Good';
    } else if (grade < 5.5) {
        formattedGrade = 'Very good';
    } else {
        formattedGrade = 'Excellent';
    }
    if (formattedGrade == 'Fail'){
        console.log(`Fail (2)`);
    } else {
        console.log(`${formattedGrade} (${grade.toFixed(2)})`);
    }
}
formatGrade(3.33);