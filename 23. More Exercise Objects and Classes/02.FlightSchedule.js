function flightSchedule(input) {

    let flights = input.shift();
    let changedStatuses = input.shift();
    let statusNeedToCheck = input.shift()[0];

    let listOfFlights = {};

    for (const line of flights) {
        let [flightNumber, ...destination] = line.split(' ');
        let destinationNmae = destination[0];
        destination.length === 2 ? destinationNmae = `${destination[0]} ${destination[1]}` : null;
        listOfFlights[flightNumber] = { Destination: destinationNmae, Status: "Ready to fly", };
    }

    for (const line of changedStatuses) {
        let [flightNumber, status] = line.split(' ');
        listOfFlights[flightNumber] !== undefined ? listOfFlights[flightNumber].Status = status : null;
    }

    for (let flight in listOfFlights) {
        listOfFlights[flight].Status === statusNeedToCheck ? console.log(listOfFlights[flight]) : null;
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);