// packages
import express from 'express';
import bodyParser from 'body-parser';
// local packages
import Weight from './models/emp_weights.js';
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const Weight = require('./models/emp_weights.js');
const weight = new Weight();
const router = express.Router();

// Create records
router.post("/putweights", function(req, res){
    let empName = req.body.empName;
    let empWeight = req.body.empWeight;
    weight.empName = empName;
    weight.empWeight = empWeight;
    weight.save(function(err){
        if (err){
            res.end(err.toString())
        }
        else {
            console.log('Success! No errors from weight.save().');
            res.end(`Created ${empName}`)
        }
    });
});
//
app.use('/', router);
app.listen(port);
console.log('Listening on ' + port);
//
