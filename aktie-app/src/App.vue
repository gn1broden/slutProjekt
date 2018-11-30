<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link>
      <router-link to="/beerbibliotek">Beerbiblioteket</router-link>
      <router-link to="/favorites">favoriter</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods:{
      
    }
  }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background: rgb(228, 228, 228);
  padding: 30px;
  a {
    font-size: 22px;
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    margin-right: 15px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.beer-list{
  display: inline-block;
  width: 100%;
  .beer{
    display: inline-block;
    width: 18%;
    margin-right: 0.8%;
    margin-bottom: 30px;
    float: left;
    border: 1px solid #eee;
    padding: 5px;
    min-height: 350px;
    a{}
    .title{
        min-height:40px;
    }
    img{
        max-width: 100px;
        display: inline-block;
    }
    p{
      min-height: 20px;
      width: 100%;
      display: inline-block;
    }
    button{
      display: inline-block;
    }
  }
}
</style>
