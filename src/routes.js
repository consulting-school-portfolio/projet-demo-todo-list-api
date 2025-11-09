const express = require('express')
const router = express.Router();
const {
    addTodo,
    getTodos,
    getTodoById,
    markToDoAsComplete,
    deleteTodo,
    updateTodo
} = require('./todos')

router.post("/createTodo", addTodo);
router.get("/getTodos", getTodos);
router.get("/getTodoById/:id", getTodoById);
router.put("/markTodoAsComplete/:id", markToDoAsComplete);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;