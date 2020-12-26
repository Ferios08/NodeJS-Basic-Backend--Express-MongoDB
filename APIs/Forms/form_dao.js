//  Data Access Object (DOA)
var mongoose = require('mongoose');
var formsSchema = require('./form_model');

formsSchema.statics = {
    create : function(data, cb) {
        var form = new this(data);
        form.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var formsModel = mongoose.model('Forms', formsSchema);
module.exports = formsModel;