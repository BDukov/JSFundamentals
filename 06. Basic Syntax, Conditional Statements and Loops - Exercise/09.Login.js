function password(input) {

    let username = input[0];
    let index = 1;
    let data = input[index];
    data = data.split('').reverse().join('')
    let count = 1;

    while (data !== username) {
        console.log(`Incorrect password. Try again.`);
        index++;
        data = input[index];
        data = data.split('').reverse().join('');
        if (count === 3) {
            break;
        }
        count++;
    }

    if (data !== username) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}
password(["Acer","1234","Pass","1324","recA"]);
console.log(`------------------------`);
password(['sunny','rainy','cloudy','sunny','not sunny']);