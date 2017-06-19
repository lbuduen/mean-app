const Todo = require('mongoose').model('Todo');

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    }
    else {
        return 'Unknown server error';
    }
};

exports.create = function (req, res) {
    const todo = new Todo(req.body);
    todo.save(err => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(todo);
        }
    });
};

exports.list = function (req, res, next) {
    Todo.find({}).sort('-created').exec((err, todos) => {
        if (err) {
            return next(err);
        }
        else {
            res.status(200).json(todos);
        }
    });
};

exports.todoById = function (req, res, next, id) {
    Todo.findById(id, (err, todo) => {
        if (err) return next(err);
        if (!todo) return next(new Error('Failed to load todo ' + id));

        req.todo = todo;
        next();
    });
};

exports.read = function (req, res) {
    res.status(200).json(req.todo);
};

exports.update = function (req, res) {
    const todo = req.todo;

    todo.title = req.body.title;
    todo.content = req.body.content;
    if (req.body.done) {
        todo.done = new Date();
    }
    else {
        todo.done = null;
    }
    todo.save(err => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(todo);
        }
    });
};

exports.delete = function (req, res) {
    const todo = req.todo;

    todo.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(todo);
        }
    });
};