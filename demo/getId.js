const { findItem, question } = require('./todo')

const find = async() => {
    const questId = await question('input item ID : ')
    findItem(questId)
}

find()