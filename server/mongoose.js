const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/mean-app';

module.exports = function () {
    let db = mongoose.connect(uri);

    require('./models/todo.server.model');

    return db;
};