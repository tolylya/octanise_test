import { NEW_CUSTOMER_REQUEST, SET_CURRENT_USER, GET_CUSTOMER_REQUESTS } from '../actions/mainActionTypes';

export const initialState = {
  currentUser: {
    firstName: 'Anatoliy',
    lastName: 'Simonov',
    email: 'test@mail.ru',
    id: 2
  },
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
    { firstName: 'Anatoliy', lastName: 'Simonov', email: 'test@mail.ru', supplierName: 'OOO Builder', phone: '+380647458745', id: 2 },
    { firstName: 'Dmitry', lastName: 'Shatikov', email: 'test2@mail.ru', supplierName: 'OOO Skynet', phone: '+380627538745', id: 3 },
  ],
  users: {
    2: { firstName: 'Anatoliy', lastName: 'Simonov', email: 'test@mail.ru', supplierName: 'OOO Builder', phone: '+380647458745', id: 2 },
    3: { firstName: 'Dmitry', lastName: 'Shatikov', email: 'test2@mail.ru', supplierName: 'OOO Skynet', phone: '+380627538745', id: 3 },
  }
};

export default function main(state = initialState, action) {
  switch (action.type) {
    case NEW_CUSTOMER_REQUEST:
      return {
        ...state,
        customerRequests: [...state.customerRequests, action.payload]
      };

    case GET_CUSTOMER_REQUESTS:
      return {
        ...state,
        customerRequests: [...state.customerRequests, ...action.payload]
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}

