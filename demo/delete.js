const { question, deleteItem } = require('./todo')

const deleted = async() => {
    const itemId = await validation('input items ID : ')
    deleteItem(itemId)
}

const validation = async(prompt) => {
    let input
    do {
        input = await question(prompt)
        if (!input) {
            console.log('-----Enter the items ID!!!-----')
        }
    } while (!input);
    return (input)
}

deleted()