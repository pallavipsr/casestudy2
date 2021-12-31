const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.yhwbj.mongodb.net/casestudy2?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;