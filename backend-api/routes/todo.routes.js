const express = require("express");
const router = express.Router();
const auth = require("../authenticate");
const todoController = require("../controllers/todo.controller");

router.route("/").get(auth, todoController.getTodos);
router.route("/").post(auth, todoController.createTodo);

router.route("/:id").put(auth, todoController.updateTodo);

router.route("/:id").delete(auth, todoController.deleteTodo);
// router.route("/:id").put(auth, todoController.updatetodo);
module.exports = router;
