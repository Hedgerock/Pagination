export const calcSum = (arr) =>  {
    if (!arr.length) {
        return null;
    }

    return arr.reduce((acc, item) => acc + +item.price, 0);
}