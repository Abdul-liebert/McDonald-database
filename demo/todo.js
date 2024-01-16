const { generateRandomId } = require('./generateRandomId')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const directory = './db'
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}

const check = './db/database.json'
if (!fs.existsSync) {
    fs.writeFileSync(checkfile, '[]', 'utf8')
}

const question = (quest) => {
    return new Promise((resolve, reject) => {
        rl.question(quest, (answer) => {
            resolve(answer);
        });
    });
};

const item = () => {
    const files = fs.readFileSync(check, 'utf8')
    const data = JSON.parse(files)
    console.log(data)
    rl.close()
}

const store = (nameMenu, categories, price, qty, description, cal) => {
    const id = generateRandomId(6)
    const newItem = {
        id,
        nameMenu,
        categories,
        price,
        qty,
        description,
        cal
    }

    const files = fs.readFileSync(check, 'utf8')
    const data = JSON.parse(files)
    data.push(newItem)
    fs.writeFileSync(check, JSON.stringify(data), 'utf8')
    console.log('----- New menu has been stored -----')
    rl.close()
}

const findItem = (itemId) => {
    const files = fs.readFileSync(check, 'utf8')
    const data = JSON.parse(files)
    const idItem = data.find(item => item.id === itemId)

    if (idItem) {
        console.log(idItem)
        return idItem
    } else {
        console.log(`Item with Id : ${itemId} undefined`)
        return undefined;
    }
}

const update = (itemId, updateItem) => {
    const files = fs.readFileSync(check, 'utf8');
    const data = JSON.parse(files);
    const index = data.findIndex(item => item.id === itemId);

    if (index !== -1) {
        data[index] = {...data[index], ...updateItem };
        fs.writeFileSync(check, JSON.stringify(data));
        console.log(`-----item with Id : ${itemId} successfully updated-----`);
    } else {
        console.log(`-----item with Id : ${itemId} undefined-----`);
    }
    rl.close()
}

const deleteItem = (itemId) => {
    const files = fs.readFileSync(check, 'utf8')
    const data = JSON.parse(files)
    const filteredItem = data.filter(item => item.id !== itemId)

    if (filteredItem.length < data.length) {
        fs.writeFileSync(check, JSON.stringify(filteredItem, null, 2))
        console.log(`-----item with Id : ${itemId} successfully deleted-----`)
    } else {
        console.log(`-----item with Id : ${itemId} undefined-----`)
    }
    rl.close()
}

module.exports = { item, question, store, findItem, deleteItem, update, rl }