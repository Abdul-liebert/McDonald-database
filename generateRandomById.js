const generateRandomId = (length) => {
    let result = ''
    const characters = '!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result

}
const generateId = generateRandomId(10)
    // console.log(`Generated ID: ${generateId}`);

module.exports = generateRandomId