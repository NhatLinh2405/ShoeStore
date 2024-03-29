import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_CLEAR_ITEMS,
} from "../Constants/CartConstants";

export const cartReducer = (
    state = { cartItems: [], shippingAddress: {} },
    action
) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const exitsItem = state.cartItems.find(
                (i) => i.product === item.product
            );
            if (exitsItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === exitsItem.product ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (i) => i.product !== action.payload
                ),
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case CART_CLEAR_ITEMS: {
            return {
                ...state,
                cartItems: [],
            };
        }
        default:
            return state;
    }
};
