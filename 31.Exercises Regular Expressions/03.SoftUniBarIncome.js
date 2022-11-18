function softUniBarIncome(customertArray) {

    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d)+\|(?<price>[\d]+[.]*\d+)\$/gm

    let totalIncome = 0;
    let command = customertArray.shift();

    while (command !== 'end of shift') {

        let currentData = pattern.exec(command);

        if (currentData) {
            let currentCustomer = currentData.groups['customer'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);
            
            let totalProductPrice = currentCount * currentPrice;

            console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);
            totalIncome += totalProductPrice;

            command = customertArray.shift();
            currentData = pattern.exec(command);
        } else {
            command = customertArray.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);