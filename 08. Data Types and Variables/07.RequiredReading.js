function requiredReading(pagesOfBook, pagesPerHour, days){
    let hoursForReadPerDay = (pagesOfBook / pagesPerHour) / days;
    console.log(hoursForReadPerDay);
}

requiredReading(212,20 ,2);
console.log(`-----------`);
requiredReading(432,15,4);