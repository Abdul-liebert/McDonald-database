const { todoQuestion, deleteTodoById } = require("./todo")

const deleteTodo = async() => {
    const todoId = await todoQuestion("Input todo's id : ")
    deleteTodoById(todoId)
}

deleteTodo()