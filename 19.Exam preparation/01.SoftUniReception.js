function softUniReception(array) {

    let firstEmployee = Number(array.shift());
    let secondEmployee = Number(array.shift());
    let thirdEmployee = Number(array.shift());
    let studentsCount = Number(array.shift());

    let totalStudentsPerHour = firstEmployee + secondEmployee + thirdEmployee;

    let hours = 0;

    while (studentsCount > 0) {
        hours++;
        studentsCount -= totalStudentsPerHour;
        if (hours % 4 === 0) {
            hours++
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5', '6', '4', '20']);