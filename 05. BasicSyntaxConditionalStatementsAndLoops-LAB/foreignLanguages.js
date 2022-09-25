function foreignLanguages(input) {
    let country = input[0];

    switch (country) {
        case "England":
            console.log("English");
            break;
        case "USA":
            console.log("English");
            break;
        case "Spain":
            console.log("Spanish");
            break;
        case "Argentina":
            console.log("Spanish");
            break;
        case "Mexico":
            console.log("Spanish");
            break;
        default: console.log("unknown");
            break;

    }
}
foreignLanguages(["USA"]);
foreignLanguages(["Germany"]);