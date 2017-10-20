/**
 *
 * Created by M S I on 2017/9/25.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = {
    name: String,
    password: String
};

var user = mongoose.model('user',new Schema(user));

module.exports = user;