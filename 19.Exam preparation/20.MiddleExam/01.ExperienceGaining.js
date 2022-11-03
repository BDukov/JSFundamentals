function experienceGaining(input) {

    let amountOfExperience = Number(input.shift());
    let countOfBattles = Number(input.shift());
    let currentBattle = 0;
    let totalExperience = 0;

    for (let i = 0; i < countOfBattles; i++) {
        currentBattle++;
        let currentExperience = Number(input[i]);
        let bonus = 0;
        if (currentBattle % 3 === 0) {
            bonus = currentExperience * 0.15;
            currentExperience += bonus;
        }
        if (currentBattle % 5 === 0) {
            bonus = currentExperience * 0.10;
            currentExperience -= bonus;
        }
        if (currentBattle % 15 === 0) {
            bonus = currentExperience * 0.05;
            currentExperience += bonus;
        }
        totalExperience += currentExperience;
        if (totalExperience >= amountOfExperience) {
            break;
        }
    }
    let needed = amountOfExperience - totalExperience;

    if (totalExperience >= amountOfExperience) {
        console.log(`Player successfully collected his needed experience for ${currentBattle} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${needed.toFixed(2)} more needed.`);
    }
}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30])
    ;