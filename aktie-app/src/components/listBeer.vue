<template>
    <div class="beerList">
        <h1>Öl listning</h1>
        <div class="beer-wrapper">
            <div class="beer" v-for="beer in beerList" v-bind:key="beer.beer">
                <div>{{beer.nameDisplay}}</div>
                <div>{{beer.abv}}</div>
                <div>{{beer.style.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return{
            key: "key=a8079a799453779042699fa42859cec9",
            url: "https://sandbox-api.brewerydb.com/v2/beers?key=a8079a799453779042699fa42859cec9",
            beerList:[]
        }

    },
    created: function(){
        this.loadBeers();
    },
    methods:{
        loadBeers(){
             this.$http
            .get(this.url)
            .then(resp => {
            console.log(resp.data.data);
            this.beerList = resp.data.data
            })
            .catch(err => console.log(err));
        }
    }
}

</script>

<style lang="scss" scoped>

</style>


