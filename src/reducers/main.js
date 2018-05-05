import { NEW_CUSTOMER_REQUEST } from '../actions/mainActionTypes';

export const initialState = {
  currentUser: {},
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
  }],
  suppliers: [
    { firstName: 'Anatoliy', lastName: 'Simonov', email: 'test@mail.ru', supplierName: 'OOO Builder', phone: '+380647458745', id: Math.random() },
    { firstName: 'Dmitry', lastName: 'Shatikov', email: 'test2@mail.ru', supplierName: 'OOO Skynet', phone: '+380627538745', id: Math.random() },
  ],
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

