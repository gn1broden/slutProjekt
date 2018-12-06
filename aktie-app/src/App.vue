<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link>
      <router-link to="/beerbibliotek">Beerbiblioteket</router-link>
      <router-link to="/favorites">Favoriter</router-link>
    </div>
    <div id="page-wrapper">
      <router-view/>
    </div>
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
@import './css/variabler.scss';
@import './css/general.scss';

#app {
  //background: rgb(212, 212, 212);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav {
  //background: $primary-color;
  border-bottom: 2px solid #eee;
  padding: 30px;
  a {
    font-size: 18px;
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
    background: white;
    display: inline-block;
    width: 22%;
    margin-right: 1.5%;
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
