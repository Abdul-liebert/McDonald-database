const { updateTodo, todoQuestion } = require("./todo")

const updatedTodoId = async() => {
    const todoId = await todoQuestion("Input todo ID : ")
    const title = await todoQuestion("Input todo Title : ")
    const description = await todoQuestion("Input todo Description : ")
    const status = await todoQuestion("Input todo Status : ")

    updateTodo(todoId, {
        title,
        description,
        status,
    })
}

updatedTodoId()