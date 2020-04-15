<template>
  <div class='card' style='width: 18rem;'>
    <div class='card-body'>
      <h5 class='card-title'>{{ contact.data().firstName }} {{ contact.data().lastName }}</h5>
      <h6 class='card-subtitle mb-2 text-muted'>{{ contact.data().email }}</h6>
      <p class='card-text'>Phone nomber: {{ contact.data().phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contact'],
};
</script>

<style lang='scss' scoped>
</style>
