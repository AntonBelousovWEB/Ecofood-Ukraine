export const getItemQuantity = (state, itemId) => {
    const item = state.find(item => item.id === itemId);
    return item ? item.quantity : 0;
};
