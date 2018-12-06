<template>
    <div class="beer-favorites">
        <div class="beer-list">
            <div class="beer" v-for="favorit in collectFavorites" v-bind:key="favorit.id">
                <a  href="#/beerpage" v-bind:class="favorit.id" v-on:click="toProduct($event)">
                    <h3 class="title" >{{favorit.nameDisplay}}</h3>
                </a>
                <img src="../assets/beerbootle.jpg" />
                <p> Alc: ~{{favorit.abv}}%</p>
                <!-- <div>{{beer.name}}</div> -->
                <div class="button" v-on:click="removeFromFavorit(favorit.nameDisplay)"> ta bort från favvo</div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'beerFavorites',
    computed:{
        collectFavorites(){
            return this.$store.getters.getFavortites;
        }
    },
    methods:{
        toProduct(e){
            //console.log(e.target.parentElement.className)
            let productId = e.target.parentElement.className;
            this.$store.commit('setStoreBeerId', productId);
            //console.log(this.$store.state.productId);
        },
        removeFromFavorit(name){
            this.$store.commit('removeFavorit', name);
        }
    }
    
    
}
</script>

<style scoped lang="scss">

.beer-favorites{
    display: inline-block;
    width: 100%;
}

@media screen and (max-width: 700px) {
    .beer{
        width: 45%;
    }
}

</style>

