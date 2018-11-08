<template>
    <div class="stockTest">
        <p>{{crawl}}</p>
    </div>
</template>


<script>
export default {
  name: "stockTest",
  data() {
    return {
      url: "https://sandbox-api.brewerydb.com/v2/beers?key=a8079a799453779042699fa42859cec9",
      crawl: "Loading..."
    };
  },
  created: function() {
    this.loadStarWars();
  },
  methods: {
    loadStarWars() {
      this.$http
      //console.log(this.url)
        .get(this.url)
        
        .then(resp => {
          console.log(resp.data)
          this.crawl = resp.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

</style>
