const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount, shipping } = state.cart.reduce(
      (cartTotal, item) => {
        const { price, amount } = item;
        const itemTotal = price * amount;
        return {
          total: cartTotal.total + itemTotal,
          amount: cartTotal.amount + amount,
        };
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    if (amount === 0) {
      shipping = 0;
    } else {
      shipping = 5.99;
    }
    return { ...state, total, amount, shipping };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempBag = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempBag };
  }

  return state;
};

export default reducer;
