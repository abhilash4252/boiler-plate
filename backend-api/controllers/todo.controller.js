const todoService = require("../services/todo.service");

exports.getTodos = async function (req, res, next) {
  // Validate request parameters, queries using express-validator if needed

  try {
    var todos = await todoService.getTodos(req);
    return res.status(200).send(todos);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createTodo = async function (req, res, next) {
  // Validate request parameters, queries using express-validator if needed

  try {
    var todo = await todoService.createTodo(req);
    return res.status(200).send(todo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateTodo = async function (req, res, next) {
  // Validate request parameters, queries using express-validator if needed

  try {
    var todo = await todoService.updateTodo(req);
    return res.status(200).send(todo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteTodo = async function (req, res, next) {
  // Validate request parameters, queries using express-validator if needed

  try {
    var todo = await todoService.deleteTodo(req);
    return res.status(200).send(todo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
