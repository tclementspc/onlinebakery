import { ActionTypes } from "./constants";

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

//export const removeSelectedProduct = () => {
//  return {
//    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//  };
//};
