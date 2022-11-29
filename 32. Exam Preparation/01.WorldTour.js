function worldTour(input) {
    let data = input;
    let tour = data.shift();
    let line = data.shift();

    while (line !== 'Travel') {
        let splited = line.split(':');
        let command = splited[0];

        switch (command) {
            case "Add Stop": {
                let index = Number(splited[1]);
                let destination = splited[2];
                if (index < tour.length && index >= 0) {
                    let firstParth = tour.slice(0, index);
                    let lastParth = tour.slice(index);
                    tour = firstParth + destination + lastParth;
                }
                console.log(tour);
                break;
            }
            case "Remove Stop": {
                let startIndex = Number(splited[1]);
                let endIndex = Number(splited[2]);
                if (startIndex >= 0 && startIndex < tour.length && endIndex >= 0 && endIndex < tour.length) {
                    let firstParth = tour.slice(0, startIndex);
                    let lastParth = tour.slice(endIndex + 1, tour.length);
                    tour = firstParth + lastParth;
                }
                console.log(tour);
                break;
            }
            case 'Switch': {
                let oldString = splited[1];
                let newString = splited[2];

                if(tour.includes(oldString)){
                    tour = tour.split(oldString).join(newString);
                    console.log(tour);
                }
                break;
            }
        }

        line = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
