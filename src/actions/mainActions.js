import axios from 'axios';

import { NEW_CUSTOMER_REQUEST, SET_CURRENT_USER } from './mainActionTypes';

export function newCustomerRequest(customerId, body) {
  return (dispatch) => {
    return axios.post(`/api/v1/customers/${customerId}/requests`, body)
      .then(({data: {request}}) => {
        dispatch({
          type: NEW_CUSTOMER_REQUEST,
          payload: request
        });
      });
  };
}

export function setCurrentUser(user) {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  };
}

export function customerRegister(body) {
  return axios.post('/api/v1/customers/register', body);
}

export function login(body) {
  return axios.post('/api/v1/login', body);
}

export function getCustomerRequests(customerId) {
  return axios.get(`/api/v1/customers/${customerId}/requests`);
}

export function inviteSupplier(body) {
  return axios.post('/api/v1/suppliers/invite', body);
}
