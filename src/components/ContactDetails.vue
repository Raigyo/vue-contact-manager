<template>
<div>
  <!-- Display-->
  <div class='card' style='width: 18rem;'>
    <div class='card-body'>
      <h5 class='card-title'>
        {{ contact.data().firstName }} {{ contact.data().lastName.toUpperCase() }}
      </h5>
      <h6 class='card-subtitle mb-2 text-muted'>{{ contact.data().email }}</h6>
      <p class='card-text'>Phone number: {{ contact.data().phone }}</p>
      <button class="btn btn-sm btn-warning" @click="editContact">Edit</button>
      <button class="btn btn-sm btn-danger" @click="deleteContact">Delete</button>
    </div>
  </div>
  <!-- Edit-->
  <div v-if="isInEditMode" class="card" style="width: 18rem;margin-bottom: 10px;">
    <div class="card-body">
      <!-- we clone and work on a copy of the contact -->
      <input type="text" v-model="contactCopy.firstName"><br>
      <input type="text" v-model="contactCopy.lastName"><br>
      <input type="text" v-model="contactCopy.email"><br>
      <input type="text" v-model="contactCopy.phone"><br>

      <h5 class="card-title">{{contact.data().lastName}} {{contact.data().firstName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{contact.data().email}}</h6>
      <p class="card-text">numéro de téléphone : {{contact.data().phone}}</p>
      <button
        class="btn btn-sm btn-success"
        @click="saveEdit">
        modifier
      </button>
      <button
        class="btn btn-sm btn-warning"
        @click="cancelEdit">
        annuler
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
    };
  },
  methods: {
    editContact() {

    },
  },
};
</script>

<style scoped>
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
button {
  margin: 0px 5px;
}
</style>
