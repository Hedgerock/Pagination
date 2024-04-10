export const filteredByCategory = async (curCat) => {
    
    curCat && curCat !== 'all' ? curCat = `?category=${curCat}&_start=0&_limit=6` : curCat = '?_start=0&_limit=6'

    const request = await fetch(`http://localhost:3000/products${curCat}`)
    const result = await request.json();

    return result;
}