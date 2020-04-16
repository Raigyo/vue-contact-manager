<template>
  <div id='app'>
    <!-- custom events: v-on:<eventName>='<method>' or '@' listen to the event -->
    <!-- created in children and use the method in parent -->
    <!-- here it refreshes the contact list after a create -->
    <!-- / children to parent -->
    <ContactForm @created='getAllContacts' title='Create contact' />
    <!-- binding: 'v-bind:' or ':', the property could be used in -->
    <!-- the target component using props -->
    <!-- / parent to children -->
    <ContactList
      @deleteContact='deleteContact'
      :contacts='contacts'
      title='Contact list'
      @saveEdit='saveEdit'
    />
    <!-- Display the selected route -->
    <router-view />
  </div>
</template>

<script>
// Import components
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';
import db from './shared/db';

export default {
  // Data: return empty array because the promise is not solved yet
  data() {
    return {
      contacts: [],
    };
  },
  // Lifecycle hook: called with vue component. Here: created
  created() {
    this.getAllContacts();
  },
  methods: {
    getAllContacts() {
      // Promise
      db.read()
        .then((snapshot) => {
          console.log(snapshot);
          // snapshot.docs: .docs property = documents in contacts collection in Firebase
          this.contacts = snapshot.docs;
        })
        .catch((error) => {
          console.error(error);
        });
    }, // \getAllContacts
    deleteContact(contact) {
      // Promise
      db.delete(contact.id)
        .then(() => {
          this.getAllContacts();
        })
        .catch((error) => {
          console.error(error);
        });
    }, // \deleteContact
    saveEdit(editedContact) {
      db.update(editedContact)
        .then(() => {
          this.getAllContacts();
        })
        .catch((error) => {
          console.error(error);
        });
    }, // \saveEdit
  }, // \methods
  name: 'App',
  components: {
    ContactForm,
    ContactList,
    // Declare components
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
