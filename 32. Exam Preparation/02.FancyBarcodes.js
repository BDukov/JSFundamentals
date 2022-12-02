function fancyBarcodes(input) {
    let count = Number(input.shift());
    
    for (let i = 0; i < count; i++) {
        let pattern = /@#+(?<code>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm;
        let barcode = input.shift();
        let match = pattern.exec(barcode);

        if (match != null) {
            let code = match.groups['code'];
            let group = '';
            let arrCode = code.split('');
            for (let char of arrCode) {
                if (char.charCodeAt() > 47 && char.charCodeAt() < 58) {
                    group += char;
                }
            }
            if (group === '') {
                group = '00';
            }
            console.log(`Product group: ${group}`);

        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
