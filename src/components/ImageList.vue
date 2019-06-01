<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
    
    <!-- {{allImages}} -->
    <img v-for="image in allImages" :src="image.link" :key="image.link">
    </div>
    <h2 v-else>Log in to Get Start</h2>
  </div>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'ImageList',

  methods: mapActions(['fetchImages']),
  created() { 
    this.fetchImages();
  },
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  }
}
</script>

<style scoped>
  .image-container {
    columns: 3;
    column-gap: 0;
  }
  img {
    max-width: 100%;
    padding: 0.2em;
  }
</style>
