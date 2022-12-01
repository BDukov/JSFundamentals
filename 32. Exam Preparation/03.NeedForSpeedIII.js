function needForSpeed(input) {
    let numberOfCars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let line = input.shift().split('|');
        let car = line[0];
        let mileage = Number(line[1]);
        let fuel = Number(line[2]);

        cars[car] = { mileage, fuel };
    }

    while (input[0] != 'Stop') {
        let line = input.shift().split(' : ');
        let command = line[0];

        switch (command) {
            case 'Drive': {
                let car = line[1];
                let distance = Number(line[2]);
                let fuel = Number(line[3]);

                if (cars[car].fuel < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    cars[car].mileage += distance;
                    cars[car].fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed. `);
                }
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
                break;
            case 'Refuel': {
                let car = line[1];
                let fuels = Number(line[2]);

                let litersBeforeFuelsUp = cars[car].fuel;

                if (cars[car].fuel + fuels <= 75) {
                    cars[car].fuel += fuels;
                    console.log(`${car} refueled with ${fuels} liters`);
                } else {
                    cars[car].fuel = 75;
                    console.log(`${car} refueled with ${75 - litersBeforeFuelsUp} liters`);
                }
            }
                break;
            case 'Revert': {
                let car = line[1];
                let kilometers = Number(line[2]);

                cars[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                if (cars[car].mileage < 10000) {
                    cars[car].mileage = 10000;
                }
            }
                break;
        }
    }

    for (let car of Object.entries(cars)) {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);