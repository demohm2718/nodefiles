// Add HTTP packages
import express from 'express';
const app = express();
const port = 8000;
let router = express.Router();
router.get('/', function(req, res) {
    res.send('Root being served.');
});
//
router.get('/aboutus', function(req, res) {
    res.send('About Us being served.');
});
//
router.get('/products/:productID', function(req, res) {
    res.send('You are viewing product #' + req.params.productID);
});
//
app.listen(port);
app.use('/', router);
console.log('Listening on ' + port);
