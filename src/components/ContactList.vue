<template>
    <div>
        <h2>{{ title }}</h2>
        <ul>
            <!-- 'v-for' = 'for each' -->
            <li v-for="contact in contacts" :key="contact.id">
                <!-- interpretation using 'data' method-->
                {{ contact.data().firstName }} {{ contact.data().lastName }}
                <button @click="deleteContact(contact)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['contacts', 'title'], // props from App component (parent to children)
  methods: {
    deleteContact(contact) {
      // we are in a dumb component so we emit an event to the parent smart component
      this.$emit('deleteContact', contact);
    }, // \deleteContact
  }, // \methods
}; // \export default
</script>

<style scoped>
li {
  list-style: none;
}
ul {
  padding: 0;
  list-style-type: none;
}
</style>
