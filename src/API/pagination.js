import { initTotalPages } from "../utils/initTotalPage";

export const paginationFunc = async (curCat) => {

    curCat && curCat !== 'all' 
        ? curCat = `?category=${curCat}` 
        : curCat = ''

    const request = await fetch(`http://localhost:3000/products${curCat}`)
    const response = await request.json();
    const total =  Math.ceil(response.length / 6)

    return initTotalPages(total)
}