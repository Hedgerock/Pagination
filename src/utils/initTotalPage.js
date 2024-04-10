export const initTotalPages = (val) => {
    let count = 1;
    const res = [];

    while (count <= val) {
        res.push(count);
        count++
    }

    return res
}