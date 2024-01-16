const { question, update, findItem, rl } = require('./todo');



const updateItem = async() => {
    const id = await question("Masukkan id item: ");

    if (!id.trim()) {
        console.log('Harap isi ID dan coba lagi.');
        rl.close()
        return

    }

    const existData = findItem(id);

    if (existData) {
        const nameMenu = await question("Input Menu name (Enter for skip): ");
        const categories = await question("Input Menu categories (Enter for skip): ");
        const price = await question("Input Menu price (Enter for skip): ");
        const qty = await question("Input Menu quantity (Enter for skip): ");
        const description = await question("Input Menu description (Enter for skip): ");
        const cal = await question("Input Menu calories (Enter for skip): ");

        const updatedData = {
            nameMenu: nameMenu.trim() !== '' ? nameMenu.trim() : existData.nameMenu,
            categories: categories.trim() !== '' ? categories.trim() : existData.categories,
            price: price.trim() !== '' ? price.trim() : existData.price,
            qty: qty.trim() !== '' ? qty.trim() : existData.qty,
            description: description.trim() !== '' ? description.trim() : existData.description,
            cal: cal.trim() !== '' ? cal.trim() : existData.cal,
        };

        const isDataChanged = Object.keys(updatedData).some(
            value => String(updatedData[value]) !== String(existData[value])
        );

        if (isDataChanged) {
            update(id, updatedData);
            console.log('Data Anda berhasil diperbarui.');
        } else {
            console.log('Tidak ada perubahan yang dilakukan.');
        }
        rl.close()
    } else {
        console.log('Data tidak ditemukan. Pembaruan dibatalkan.');
    }
    rl.close()
};

updateItem();