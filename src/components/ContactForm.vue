<!-- Component ContactForm -->

<template>
    <div>
        <h2>Create contact</h2>
        <form @submit.prevent="createContact">
            <!-- listener: '@' = 'v-on:' / prevent: avoid the submit by default-->
            <input type="text" placeholder="First name" v-model="contact.firstName">
            <input type="text" placeholder="Name" v-model="contact.lastName">
            <input type="text" placeholder="Email" v-model="contact.email">
            <input type="text" placeholder="Phone" v-model="contact.phone">
        <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
import db from '../shared/db';

export default {
  data() {
    return {
      // v-models: custom inputs
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    createContact() {
      // console.log(this.contact);
      db.create(this.contact)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, // \createContact
  },
};// \export default
</script>

<style scoped>

</style>
