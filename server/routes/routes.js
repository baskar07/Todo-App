const express = require('express');
const { postTodo } = require('../controller/todoController');
const router = express.Router();

router.route('/add-todo').post(postTodo);

module.exports = router;