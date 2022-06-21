
//create variable for the JSON conversion
const csvtojson = require('csvtojson')

//connect to file system module
const fs = require('fs')

//file path to csv file
const csvFilePath = "../industry led/generatedCsv.csv"

//code to convert csv to json
csvtojson()
.fromFile(csvFilePath)
.then((jsonObj) => {
    console.log(jsonObj)

    //path to write the json file
    fs.writeFileSync("../industry led/generatedJSON.json", JSON.stringify(jsonObj), "utf-8", (err) => {
        if (err) console.log(err)
    
})
}
)

