var db = require("../models");
const Todo = db.Todo;
exports.getTodos = async function (req) {
  try {
    // console.log(await db.Todo.findAll({ where: { userId: req.user.sub } }));
    let todos = await Todo.findAll({ where: { userId: req.user.sub } });

    return todos;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};

exports.createTodo = async function (req) {
  try {
    let todo = await Todo.create({
      description: req.body.description,
      userId: req.user.sub,
      isCompleted: false,
    });

    return todo;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};

exports.updateTodo = async function (req) {
  try {
    console.log(req.params.id);
    let todo = await Todo.findOne({
      where: {
        id: req.params.id,
        userId: req.user.sub,
      },
    });

    if (todo) {
      todo.isCompleted = req.body.isCompleted;
      await todo.save();
    }

    return todo;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};

exports.deleteTodo = async function (req) {
  try {
    console.log(req.params.id);
    let todo = await Todo.findOne({
      where: {
        id: req.params.id,
        userId: req.user.sub,
      },
    });

    if (todo) {
      await todo.destroy();
    }

    return todo;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};
