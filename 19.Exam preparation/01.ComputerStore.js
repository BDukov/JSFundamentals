function computerStore(array) {

    // taxes are 20% of each part price
    // special customer has a 10% discount on the total price with taxes
    //If given price is not a positive number, print "Invalid price!"
    //If the total price is equal to zero, print 'Invalid order!'

    let totalPriceWithoutTaxes = 0;
    let taxes = 0;
    let currentCommand = array.shift();
    let command = array.slice().pop();

    if (currentCommand === 'special' || currentCommand === 'regular') {
        console.log('Invalid order!');
    } else {
        while (currentCommand != command) {
            let currentPrice = Number(currentCommand);
            let currentTax = currentPrice * 0.2;

            if (currentPrice >= 0) {
                totalPriceWithoutTaxes += currentPrice;
                taxes += currentTax;
            } else {
                console.log('Invalid price!');
            }
            currentCommand = array.shift();
        }

        let totalPrice = totalPriceWithoutTaxes + taxes;

        if (totalPrice === 0) {
            console.log('Invalid order!');
        } else if (command === 'special') {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log('-----------');
            console.log(`Total price: ${(totalPrice * 0.9).toFixed(2)}$`);
        } else if (command === 'regular') {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log('-----------');
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        }
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    ;

