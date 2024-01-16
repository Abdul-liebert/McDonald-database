const generateRandomId = require('./generateRandomById')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const directory = './database'
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}

const checkFile = './database/todos.json'
if (!fs.existsSync) {
    fs.writeFileSync(checkFile, '[]', 'utf8')
}

const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const todos = () => {
    const files = fs.readFileSync(checkFile, 'utf8')
    const data = JSON.parse(files)
    console.log(data)
    rl.close()
}

const storeTodos = (title, description, status) => {
    const id = generateRandomId(10)
    const dataTodo = {
        id,
        title,
        description,
        status
    }
    const file = fs.readFileSync(checkFile, 'utf8')
    const dataTodos = JSON.parse(file)

    dataTodos.push(dataTodo)
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos))
    console.log("----- Your data has Successfully added -----")
    rl.close()
}

const findTodoId = (todoId) => {
    const file = fs.readFileSync(checkFile, 'utf8')
    const dataTodo = JSON.parse(file)
    const TodoId = dataTodo.find(todo => todo.id === todoId)

    if (TodoId) {
        console.log(TodoId)
    } else {
        console.log(`Todo with id:${todoId} undefined `)
    }
    rl.close()
}

const updateTodo = (todoId, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf8')
    let dataTodos = JSON.parse(file)
    const index = dataTodos.findIndex(todo => todo.id === todoId)

    if (index !== -1) {
        dataTodos[index] = {...dataTodos[index], ...updateTodo }
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2))
        console.log(`---Successfully updated todo with ID : ${todoId}---`)
    } else {
        console.log(`Todo with ID : ${todoId} undefined`)
    }
    rl.close()
}


const deleteTodoById = (todoId) => {
    const file = fs.readFileSync(checkFile, 'utf8')
    const dataTodo = JSON.parse(file)

    const filteredTodo = dataTodo.filter((todo => todo.id !== todoId))

    if (filteredTodo.length < dataTodo.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filteredTodo, null, 2))
        console.log(`-----Successfully deleted todo with ID : ${todoId}`)
    } else {
        console.log(`Todo with ID : ${todoId} undefined`)
    }
    rl.close()
}

module.exports = {
    todoQuestion,
    todos,
    storeTodos,
    findTodoId,
    updateTodo,
    deleteTodoById
}