import { NEW_CUSTOMER_REQUEST } from './mainActionTypes';

export function newCustomerRequest(body) {
  return (dispatch) => {
    dispatch({
      type: NEW_CUSTOMER_REQUEST,
      payload: body
    });
  };
}

