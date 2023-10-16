const express = require('express');
const { postTodo, getTodos } = require('../controller/todoController');
const router = express.Router();

router.route('/add-todo').post(postTodo);
router.route('/get-todos').get(getTodos);

module.exports = router;