import { NEW_CUSTOMER_REQUEST } from '../actions/mainActionTypes';

export const initialState = {
  user: {},
  customerRequests: [{
    key: Math.random(),
    location: 'Odessa',
    description: 'Work with water',
    requiredDate: '12-11-2018',
    lastDate: '22-11-2018',
    supplier: 'Anatoliy Simonov',
    status: 'Pending'
  }, {
    key: Math.random(),
    location: 'Odessa',
    description: 'Work with water',
    requiredDate: '12-11-2018',
    lastDate: '22-11-2018',
    supplier: 'Anatoliy Simonov',
    status: 'Approved'
  }]
};

export default function main(state = initialState, action) {
  switch (action.type) {
    case NEW_CUSTOMER_REQUEST:
      return {
        ...state,
        customerRequests: [...state.customerRequests, action.payload]
      };

    default:
      return state;
  }
}

