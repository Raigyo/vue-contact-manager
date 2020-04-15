<!-- Component ContactForm -->

<template>
    <div>
         <h2>{{ title }}</h2>
        <form @submit.prevent='createContact'>
            <!-- listener: '@' = 'v-on:' / prevent: avoid the submit by default-->
            <p><input type='text' placeholder='First name' v-model='contact.firstName'></p>
            <p><input type='text' placeholder='Name' v-model='contact.lastName'></p>
            <p><input type='text' placeholder='Email' v-model='contact.email'></p>
            <p><input type='text' placeholder='Phone' v-model='contact.phone'></p>
        <button class="btn btn-success" type='submit'>Create</button>
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
  props: ['title'], // props from App component (parent to children)
  methods: {
    createContact() {
      // console.log(this.contact);
      db.create(this.contact)
        .then((data) => {
          console.log(data);
          // Custom event with $emit: from children to parent
          this.$emit('created');
          this.resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    }, // \createContact
    resetForm() { // Reset the fields
      this.contact.firstName = '';
      this.contact.lastName = '';
      this.contact.email = '';
      this.contact.phone = '';
    }, // \resetForm
  },
};// \export default
</script>

<style scoped>

</style>
