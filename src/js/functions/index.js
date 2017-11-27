export const setClassName = (item) => {
    let str = 'item ';
    if (item.initial) {
        str+='initial ';
    }
    if (item.disable) {
        str+='disabled ';
    }
    if (item.clicked) {
        str+='clicked ';
    }
    return str;
}