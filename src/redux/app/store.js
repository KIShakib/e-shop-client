import cartSlice from "../Features/cart/cartSlice";
import productsSlice from "../Features/products/productsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    }
})

export default store;