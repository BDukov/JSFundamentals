function destinationMapper(data) {
    let pattern = /(?<char>[=]|[/])(?<place>[A-Z][A-Za-z]{2,})\1/g;
    let text = data;
    let destinations = [];
    let points = 0;
    let matches = pattern.exec(text);

        while (matches !== null) {
            let match = matches.groups['place'];
            destinations.push(match);
            let currentPoints = match.length;
            points += currentPoints;

            matches = pattern.exec(text);
        }
        let output = destinations.join(', ');
        console.log(`Destinations: ${output}`);
        console.log(`Travel Points: ${points}`);
 }
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log(`------------------------------`);
destinationMapper("ThisIs some InvalidInput");