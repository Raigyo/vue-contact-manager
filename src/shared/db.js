// Database Access Layer (DAL)
// Useful to make it separately for instance if we change DB

import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();
// Firestore.settings({ timestampsInSnapshots: true });
// (not used anymore)

export default {
  // Return promise in createContact: create
  create(contact) {
    return Firestore.collection('contacts').add(contact);
  },
  // Return promise in getAllContacts: read
  read() {
    return Firestore.collection('contacts').get();
  },
  // Return promise in deleteContact: delete
  delete(id) {
    return Firestore.collection('contacts').doc(id).delete();
  },
};// \default
