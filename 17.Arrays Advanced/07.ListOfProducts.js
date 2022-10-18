function listOfProducts(listOfProducts) {

    let sortedListOfProducts = listOfProducts.sort();

    for (let i = 0; i < sortedListOfProducts.length; i++) {

        let currentProduct = sortedListOfProducts[i];
        console.log(`${i + 1}.${currentProduct}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);