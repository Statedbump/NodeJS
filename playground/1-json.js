//Data to work in json
const fs = require('fs')
//Challenge----> Completed <----
const buffer  = fs.readFileSync("1-json.json");
let data = JSON.parse(buffer.toString());
data.name = 'Luis';
data.planet = "Mars";
data.age = 24;

fs.writeFileSync('1-json.json',JSON.stringify(data))