<template>
    <div class="beer-info">
        <h3 class="beer-title">{{title}}</h3>
        <p class="beer-abv ">Alkoholhalt: <span :class="alcoClass">{{abv}}</span></p>
        <p class="type">Öltyp: <span>{{type}}</span></p>
        <p class="beer-category">Kategori: <span>{{category}}</span></p>
        <h4>Beskrivning</h4>
        <p class="beer-description"><span>{{description}}</span></p>
    </div>
</template>


<script>
export default {
  name: "beerInfo",
  data() {
    return {
      key: "key=a8079a799453779042699fa42859cec9",
      beerId: "zTTWa2",
      // url: "https://sandbox-api.brewerydb.com/v2/beers?key=a8079a799453779042699fa42859cec9",
      url: "https://sandbox-api.brewerydb.com/v2/beer/",
      title: "Loading...",
      abv: "Loading...",
      type: "Loading...",
      category: "Loading...",
      description: "Loading...",
      alcoClass: "good-alco",
    };
  },
  computed:{
    
  },
  created: function() {
    this.getBId();
    
  },
  mounted: function(){
        console.log(this.$store.state.productId)
    },
  methods: {
    
    getBId(){
      this.beerId = this.$store.getters.getBeerId;
      console.log(this.beerId);
      this.loadApi();
    },

    checkAbv(){
      if(this.abv > 7){
        console.log("över 6");
        this.alcoClass ="high-alco";
        
      }else if(this.abv >6 && this.abv < 7){
        this.alcoClass = "medium-alco";
      }
    },

    loadApi() {
      this.$http
      //console.log(this.url)
      .get(this.url+this.beerId+"?"+this.key)
      
      .then(resp => {
        console.log(resp)
        console.log(this.url+this.beerId+"?"+this.key)
        this.title = resp.data.data.nameDisplay;
        this.abv = parseFloat(resp.data.data.abv);
        this.type = resp.data.data.style.name;
        this.category = resp.data.data.style.category.name;
        this.description = resp.data.data.style.description
        this.checkAbv();
      })
      .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
  .randomBeer{
    min-width: 300px;
    max-width: 700px;
    background: #e4e4e4;
    margin: 0 auto;
    padding: 30px;
  }
  .beer-abv{
    .high-alco{
    color: red;
    }
    .medium-alco{
      color: yellow;
    }
    .good-alco{
      color: green;
    }
  }
</style>


