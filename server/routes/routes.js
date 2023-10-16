const express = require('express');
const { postTodo, getTodos, updateTodo } = require('../controller/todoController');
const router = express.Router();

router.route('/add-todo').post(postTodo);
router.route('/get-todos').get(getTodos);
router.route('/update-todo/:id').put(updateTodo)

module.exports = router;