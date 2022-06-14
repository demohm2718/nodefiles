//
import mongoose from 'mongoose';
//import * as module from 'module';

const uri = 'mongodb://localhost:27017/ssWeights';
try {
    console.log('Attempting to connect...');
    await mongoose.connect(uri);
        // err => {
        // if(err) throw err;
        // console.log('Connected to MongoDB! Congrats.')
} catch (err){
    throw err;
}
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));

const wSchema = new mongoose.Schema({
    empName: String,
    empWeight: String
});
//const Weight = mongoose.model('Weight', wSchema);
export default mongoose.model('Weight', wSchema);
