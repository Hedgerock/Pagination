export const getCategories = async () => {
    const response = await fetch(`http://localhost:3000/category`)
    const arr = await response.json();

    return arr
}