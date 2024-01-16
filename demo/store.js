const { question, store } = require('./todo');

const handleStore = async() => {
    const nameMenu = await validation("Input Menu name: ");
    const categories = await validation("Input Menu categories: ");
    const price = await validation("Input Menu price: ");
    const qty = await validation("Input Menu quantity: ");
    const description = await validation("Input Menu description: ");
    const cal = await validation("Input Menu calories:");

    store(nameMenu, categories, price, qty, description, cal);
};

const validation = async(prompt) => {
    let input;
    do {
        input = await question(prompt);
        if (!input) {
            console.log('Invalid Input! Please enter a value');
        }
    } while (!input);

    return input;
};

handleStore();