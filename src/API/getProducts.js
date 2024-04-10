export const getProducts = async (startVal, curCat) => {
    curCat && curCat !== 'all' ? curCat = `category=${curCat}&` : curCat = ''

    const response = await fetch(`http://localhost:3000/products?${curCat}_start=${startVal}&_limit=6`)
    const arr = await response.json();

    return arr
}
