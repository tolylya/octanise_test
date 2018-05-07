import axios from 'axios';

import { GET_CUSTOMER_REQUESTS, NEW_CUSTOMER_REQUEST, SET_CURRENT_USER } from './mainActionTypes';
import { saveToken } from '../utils/token';

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
    return dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  };
}

export function customerRegister(body) {
  return () => {
    return axios.post('/api/v1/customers/register', body)
      .then(({token, customer}) => {
        console.log('customer', customer);
        saveToken(token);
        // return setCurrentUser(customer)(dispatch);
      });
  };
}

export function login(body) {
  return () => {
    return axios.post('/api/v1/login', body)
      .then(({token, user}) => {
        console.log('user', user);
        saveToken(token);
        // return setCurrentUser(user)(dispatch);
      });
  };
}

export function getCustomerRequests(customerId) {
  return (dispatch) => {
    axios.get(`/api/v1/customers/${customerId}/requests`)
      .then(({data}) => {
        dispatch({
          type: GET_CUSTOMER_REQUESTS,
          payload: data
        });
      });
  };
}

export function inviteSupplier(body) {
  return axios.post('/api/v1/suppliers/invite', body);
}
