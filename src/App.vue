<template>
  <router-view v-if="isShow" />
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> <br>
    <router-link to="/Modernla">Modernla</router-link> <br>
    <router-link to="/example2">example2</router-link><br>
    <router-link to="/example3">example3</router-link><br>
    <router-link to="/example4">example4</router-link><br> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
</script>