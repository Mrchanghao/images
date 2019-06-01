<template>
  <header>
    <nav class="ui secondary pointing menu">
      <router-link to="/" class="active item">
      Image Story
      </router-link>

      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal" >
          <router-link class="ui item" to="/">Image</router-link>
          <router-link class="ui item" to="/upload">Upload</router-link>
          <a @click="logout" class="ui item" href="/">Logout</a>

        </div>
          <a v-else href="#" class="ui item" @click="login">Login</a>
      </div>

    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }

}
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>
