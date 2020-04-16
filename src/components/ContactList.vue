<template>
    <div class='card-block'>
        <h2>{{ title }}</h2>
      <!-- <ContactDetails> or <contact-details> (kebab-case)-->
      <contact-details
        :contact='contact'
        v-for='contact in contacts'
        :key='contact.data().id'
        @saveEdit='saveEdit'
        @deleteContact='deleteContact'
      >
      </contact-details>
    </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue';

export default {
  props: ['contacts', 'title'], // props from App component (parent to children)
  components: {
    ContactDetails,
  },
  methods: {
    deleteContact(contact) {
      // we are in a dumb component so we emit an event to the parent smart component
      this.$emit('deleteContact', contact);
    }, // \deleteContact
    saveEdit(editedContact) {
      this.$emit('saveEdit', editedContact);
    },
  }, // \methods
}; // \export default
</script>

<style scoped>
.card-block {
  padding-top: 1.5rem;
}
</style>
