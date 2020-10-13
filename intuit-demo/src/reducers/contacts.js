import { CONTACT_CREATE, CONTACT_UPDATE, CONTACT_DELETE } from '../actions/types';

const initialState = {};

// // Test data makes 11 contacts
// const initialState = {
//   1: {
//     name: 'Yancey Goggan', phone: '478-854-0843', address: '9 Everett Parkway', nickname: 'Yancey',
//   },
//   2: {
//     name: 'Hatty Barette', phone: '398-145-5093', address: '913 Troy Way', nickname: 'Hatty',
//   },
//   3: {
//     name: 'Ethelred Tregian', phone: '778-653-7518', address: '4790 Canary Place', nickname: 'Ethelred',
//   },
//   4: {
//     name: 'Cameron Landell', phone: '555-178-2927', address: '982 Mallard Pass', nickname: 'Cameron',
//   },
//   5: {
//     name: 'Kermy Yakubov', phone: '677-266-9627', address: '733 Everett Way', nickname: 'Kermy',
//   },
//   6: {
//     name: 'Cassi Dicky', phone: '903-362-5865', address: '63 Bowman Avenue', nickname: 'Cassi',
//   },
//   7: {
//     name: 'Danella Kidde', phone: '571-213-2800', address: '204 Myrtle Crossing', nickname: 'Danella',
//   },
//   8: {
//     name: 'Dayle Fitzpayn', phone: '731-210-8652', address: '3 Packers Hill', nickname: 'Dayle',
//   },
//   9: {
//     name: 'Nathan Hannig', phone: '133-152-9222', address: '46090 Ridge Oak Drive', nickname: 'Nate',
//   },
//   10: {
//     name: 'Penni Martins', phone: '476-892-4217', address: '20481 Monterey Terrace', nickname: 'Penni',
//   },
//   11: {
//     name: 'Nathan Hannig', phone: '133-152-9233', address: '46090 Ridge Oak Drive', nickname: 'Nate',
//   },
// };

export default function (state = initialState, action) {
  let contacts;

  switch (action.type) {
    case CONTACT_CREATE:
    case CONTACT_UPDATE:
      return { ...state, ...action.payload };
    case CONTACT_DELETE:
      contacts = { ...state };
      delete contacts[action.payload];

      return contacts;
    default:
      return state;
  }
}
