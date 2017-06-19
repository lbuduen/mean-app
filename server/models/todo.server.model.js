const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    done: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Todo', TodoSchema);