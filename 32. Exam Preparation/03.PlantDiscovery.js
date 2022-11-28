function plantDiscovery(input) {

    let plantCount = Number(input.shift());
    let plants = {};

    for (let i = 0; i < plantCount; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            raitings: [],
        };
    }

    let command = input.shift();

    while (command != 'Exhibition') {
        let [commandName, args] = command.split(': ')
        let [plantName, argument] = args.split(' - ');

        if (plants[plantName]) {
            switch (commandName) {
                case 'Rate':
                    let rating = Number(argument);
                    plants[plantName].raitings.push(rating);
                    break;

                case 'Update':
                    let rarity = Number(argument)
                    plants[plantName].rarity = rarity;
                    break;

                case 'Reset':
                    plants[plantName].raitings = [];
                    break;
            }
        } else {
            console.log('error');
        }
        command = input.shift();
    }

    let plantEntries = Object.entries(plants);
    plantEntries.sort((a, b) => {
        let result = b[1].rarity - a[1].rarity;

        if (result = 0) {
            let ratingA = calculateRating(a[1].raitings);
            let ratingB = calculateRating(b[1].raitings);

            return ratingB - ratingA;
        }
        return result;
    });
    console.log('Plants for the exhibition:');

    for (const [plantName, plant] of plantEntries) {
        let averageRating = calculateRating(plant.raitings)
        console.log(`- ${plantName}; Rarity: ${plant.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
    function calculateRating(raitings) {
        let sum = 0;
        for (const rating of raitings) {
            sum += rating;
        }

        let averageRating = sum / raitings.length;
        if (!averageRating) {
            averageRating = 0;
        }
        return averageRating;
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);