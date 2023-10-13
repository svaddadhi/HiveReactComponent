export const toggleItemInArray = (array, item) => {
    if (array.includes(item)) {
        return array.filter(i => i !== item);
    } else {
        return [...array, item];
    }
};

export const selectAllItems = (items) => items;

export const deselectAllItems = () => [];
