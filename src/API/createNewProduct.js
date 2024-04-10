export const createNewProduct = async (values) => {
    const { price, title, category } = values;

    await fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({ price, title, category })
    })
} 