const router = require('express').Router();

const todo = require('../controllers/todo.server.controller');

router.get('/', (req, res) => {
    res.send('api works');
});

router.route('/todo')
    .post(todo.create)
    .get(todo.list);

router.route('/todo/:todoId')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete);

router.param('todoId', todo.todoById);

module.exports = router;