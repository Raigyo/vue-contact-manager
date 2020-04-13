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
  // promise: create: function (){},
  create(contact) {
    return Firestore.collection('contacts').add(contact);
  },
  // promise: read: function (contact){},
  read() {
    return Firestore.collection('contacts').get();
  },
};// \default
