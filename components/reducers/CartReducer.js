import { useEffect, useContext } from "react";
import { ACTIONS, CartItemProvider } from "../contexts/CartItemContext";
import { useLocalStorage } from "../custom hooks/useLocalStorage";

export const sumItems = (cartItem) => {
  let itemCount = cartItem?.reduce((total, item) => total + item.quantity, 0);
  let total = cartItem?.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  if (typeof window !== "undefined") {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItem?.length > 0 ? cartItem : [])
    );
  }

  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      state.cartItem[
        state.cartItem?.findIndex((state) => state.name === action.payload.name)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItem),
      };
    case ACTIONS.DECREASE:
      state.cartItem[
        state.cartItem.findIndex((state) => state.name === action.payload.name)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItem),
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItem.filter((item) => item.name !== action.payload.name)
        ),
        cartItem: [
          ...state.cartItem.filter((item) => item.name !== action.payload.name),
        ],
      };
    case ACTIONS.ADD_ITEM:
      if (!state.cartItem?.find((item) => item.name === action.payload.name)) {
        state.cartItem?.push({ ...action.payload, quantity: 1 });
      } else {
        alert(
          `Already added ${state.cartItem[
            state.cartItem.findIndex((it) => it.name === action.payload.name)
          ].name.substr(
            0,
            30
          )}... to cart. \r\n click on cart to increase quantity`
        );
      }

      return {
        ...state,
        ...sumItems(state.cartItem),
        cartItem: [...state.cartItem],
      };

    default:
      break;
  }
};
