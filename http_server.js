import bodyParser from 'body-parser';
import express from 'express';
const app = express();
//
// Will parse url-encoded bodies that has the correst Content-Type and
// it will only accept UTF-8 encoding.
//      'extended' means parse using the querystring library
app.use(bodyParser.urlencoded({ extended: false }));
//
app.post('/weighin', (req, res) => {
    let empName = req.body.empName;
    let weight = req.body.weight;
    console.log(`POST request handled: empName is ${empName} and weight is ${weight}`);
    res.end(`Hello Mr. ${empName}, your weight comes out to be ${weight} pounds.`);
});
//
app.listen(8000, () => {
    console.log("Server is up and runnin dude.. Good job! It's at http://localhost:8000");
});
//
