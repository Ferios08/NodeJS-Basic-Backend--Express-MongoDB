
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var formSchema = new Schema({
    id :{
        type: Number,
        unique : true,
        required : true
    },
    user : {
        type: String,
        unique : false,
        required : true
    },
    content: {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = formSchema;