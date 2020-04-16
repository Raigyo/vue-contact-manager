<template>
<div>
  <!-- Conditional rendering -->
  <!-- Display we use props from contact object-->
  <div v-if="!isInEditMode" class='card' style='width: 18rem;'>
    <div class='card-body'>
      <h5 class='card-title'>
        {{ contact.data().firstName }} {{ contact.data().lastName.toUpperCase() }}
      </h5>
      <h6 class='card-subtitle mb-2 text-muted'>{{ contact.data().email }}</h6>
      <p class='card-text'>Phone number: {{ contact.data().phone }}</p>
      <button class="btn btn-sm btn-warning" @click="editContact">Edit</button>
      <button class="btn btn-sm btn-danger" @click="$emit('deleteContact', contact)">Delete</button>
    </div>
  </div>
  <!-- Edit we use props from contact object-->
  <div v-if="isInEditMode" class="card" style="width: 18rem;margin-bottom: 10px;">
    <div class="card-body">
      <!-- we clone and work on a copy of the contact (shallow copy)-->
      <input type="text" v-model="contactCopy.firstName"><br>
      <input type="text" v-model="contactCopy.lastName"><br>
      <input type="text" v-model="contactCopy.email"><br>
      <input type="text" v-model="contactCopy.phone"><br>

      <h5 class="card-title">{{contact.data().lastName}} {{contact.data().firstName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{contact.data().email}}</h6>
      <p class="card-text">Numéro de téléphone : {{contact.data().phone}}</p>
      <button
        class="btn btn-sm btn-success"
        @click="saveEdit">
        Save
      </button>
      <button
        class="btn btn-sm btn-warning"
        @click="cancelEdit">
        Cancel
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['contact'],
  data() {
    return {
      contactCopy: {},
      isInEditMode: false,
    };
  },
  methods: {
    editContact() {
      // ES6 'destructuring': avoid to repeat assignment for each variable
      // 'property shorthand -  ex: firstName: firstName => firstName
      /* eslint-disable object-curly-newline */
      const { firstName, lastName, phone, email } = this.contact.data();
      /* eslint-enable object-curly-newline */
      this.contactCopy = {
        id: this.contact.id,
        firstName,
        lastName,
        phone,
        email,
      };
      this.isInEditMode = true;
    }, // \editContact
    saveEdit() {
      this.$emit('saveEdit', this.contactCopy);
      this.isInEditMode = false;
    }, // \saveEdit
    cancelEdit() {
      this.isInEditMode = false;
    }, // \cancelEdit
  }, // \methods
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
}
button {
  margin: 0px 5px;
}
</style>
