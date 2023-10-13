export const toggleItemInArray = (set, item) => {
    const newSet = new Set(set);
    if (newSet.has(item)) {
        newSet.delete(item);
    } else {
        newSet.add(item);
    }
    return newSet;
};

export const selectAllInArray = (items) => {
    return new Set(items);
};

export const deselectAllInArray = () => {
    return new Set();
};

