function blackFlag(piratesPlan) {

    let daysOfPlunder = Number(piratesPlan.shift());
    let dailyPlunder = Number(piratesPlan.shift());
    let expectedPlunder = Number(piratesPlan.shift());

    let warshipDay = 0;
    let bonusDay = 0;

    let totalPlunder = 0;

    for (let i = 1; i <= daysOfPlunder; i++) {
        warshipDay++;
        bonusDay++;
        totalPlunder += dailyPlunder;

        if (bonusDay === 3) {
            totalPlunder += dailyPlunder * 0.5
            bonusDay = 0;
        }
        if (warshipDay === 5) {
            totalPlunder = totalPlunder * 0.7;
            warshipDay = 0;
        }
    }
    let negativeResult = (totalPlunder / expectedPlunder) * 100;
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${(totalPlunder.toFixed(2))} plunder gained.`);
    } else {
        console.log(`Collected only ${negativeResult.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);

