function orders(product, quantity){

    let totalPrice = 0;

    if (product === 'coffee'){
        totalPrice = quantity * 1.5;
    } else if (product === 'water'){
        totalPrice = quantity * 1;
    } else if (product === 'coke'){
        totalPrice = quantity * 1.4;
    } else if (product === 'snacks'){
        totalPrice = quantity * 2;
    }

    return totalPrice.toFixed(2);
}
let ordersPrice = orders("water", 5);
console.log(ordersPrice);