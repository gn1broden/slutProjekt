<template>
    <div class="startPage">
        <h1>{{msg}}</h1>
        <p class="intro">
            Detta är en go liten ölsida byggt på <a href="https://brewerydb.com">BreweryDBs</a> Api.
            Kolla in alla öler som finns i deras databas på sidan <a href="#/beerbibliotek">BeerBibliotek.</a>
            Nedanför ser du en random öl. Enjoy.
            Skapad av Gustav Brodén.
        </p>
        <section class="sektionOne">
            <randomBeer />
        </section>
    </div>
</template>



<script>
import randomBeer from '@/components/randomBeer.vue'

export default {
  name: 'startPage',
  components:{
      randomBeer
  },
  props: {
    msg: String
  }
  
}
</script>

<style lang="scss" scoped>
@import './css/variabler.scss';
@import './css/general.scss';

.intro{
    max-width: 900px;
    margin: 0 auto 30px auto;
    padding: 0 20px;
    a{
        font-weight: bold;
        &:hover{
            text-decoration: underline;
        }
    }
    
}



</style>

