function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shildPrice, armorPrice) {
    let lostFights = lostFightsCount;

    let brokenShileds = 0;
    let gladiatorExpenses = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {

        if (currentFight % 2 === 0) {
            gladiatorExpenses += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            gladiatorExpenses += swordPrice;
        }
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            gladiatorExpenses += shildPrice;
            brokenShileds++;
            if (brokenShileds % 2 === 0) {
                gladiatorExpenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7,2,3,4,5)