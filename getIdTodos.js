const { findTodoId } = require("./todo")
const { todoQuestion } = require("./todo")

const getTodoId = async() => {
    const todoId = await todoQuestion("Masukan id todo:")
    findTodoId(todoId)
}

getTodoId()