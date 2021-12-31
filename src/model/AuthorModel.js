const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.yhwbj.mongodb.net/casestudy2?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;