<template>
    <div class="randomBeer">
        <h3 class="beer-title">{{title}}</h3>
        <p class="beer-abv"><span>Alkoholhalt: </span>{{abv}}</p>
        <p class="type"><span>Öltyp: </span>{{type}}</p>
        <p class="beer-category"><span>Kategori: </span>{{category}}</p>
        <h4>Beskrivning</h4>
        <p class="beer-description"><span>: </span>{{description}}</p>
    </div>
</template>


<script>
export default {
  name: "stockTest",
  data() {
    return {
      key: "key=a8079a799453779042699fa42859cec9",
      // url: "https://sandbox-api.brewerydb.com/v2/beers?key=a8079a799453779042699fa42859cec9",
      url: "https://sandbox-api.brewerydb.com/v2/beer/random?",
      title: "Loading...",
      abv: "",
      type: "",
      category: "",
      description: "",
      
    };
  },
  created: function() {
    this.loadApi();
  },
  methods: {
    loadApi() {
      this.$http
      //console.log(this.url)
        .get(this.url+this.key)
        
        .then(resp => {
          console.log(resp)
          this.title = resp.data.data.nameDisplay;
          this.abv = resp.data.data.abv;
          this.type = resp.data.data.style.name;
          this.category = resp.data.data.style.category.name;
          this.description = resp.data.data.style.description
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

</style>
