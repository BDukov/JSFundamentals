function wildZoo(input) {

    let animals = {};
    let areas = {};


    while (input[0] !== 'EndDay') {
        let line = input.shift().split(' ');
        let command = line[0];
        let data = line[1];

        data = data.split('-');
        let animalName = data[0];
        let neededFoodQuantity = Number(data[1]);
        let area = data[2];
        switch (command) {
            case 'Add:':
                if (!areas[area]) {
                    areas[area] = 0;
                } 
                if (!animals.hasOwnProperty(animalName)) {
                    animals[animalName] = { neededFoodQuantity, area };
                    areas[area]++;
                } else {
                    animals[animalName].neededFoodQuantity += neededFoodQuantity;
                }
                break;

            case 'Feed:':
                if (animals.hasOwnProperty(animalName)) {
                    animals[animalName].neededFoodQuantity -= neededFoodQuantity;
                } else {
                    break;                           
                }
                if (animals[animalName].neededFoodQuantity <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    areas[animals[animalName].area]--;
                    delete animals[animalName];
                break;
            }
            }
        }
        console.log('Animals:');
        for (let key in animals) {
            console.log(` ${key} -> ${animals[key].neededFoodQuantity}g`);
        }
        console.log('Areas with hungry animals:');
        

        
        for (let key in areas) {
            if (areas[key] > 0){
            console.log(`${key}: ${areas[key]}`);
            }
        }
    }
    // wildZoo(["Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"]);
// wildZoo(["Add: Jamie-600-WaterfallArea",
//     "Add: Maya-6570-WaterfallArea",
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Bobbie-6570-WaterfallArea",
//     "Feed: Jamie-2000",
//     "Feed: Adam-2000",
//     "Feed: Adam-2500",
//     "EndDay"]);
wildZoo(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])
