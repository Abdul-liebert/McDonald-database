const { todoQuestion, storeTodos } = require('./todo.js')

const store = async() => {
    const title = await todoQuestion("Input title : ")
    const description = await todoQuestion("Input description : ")
    const status = await todoQuestion("Input status: ")

    storeTodos(
        title,
        description,
        status
    )

}
store()