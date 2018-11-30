<template>
    <div class="beer-favorites">
        <div class="beer-list">
            <div class="beer" v-for="favorit in collectFavorites" v-bind:key="favorit.id">
                <a  href="#/beerpage" v-bind:class="favorit.id" v-on:click="toProduct($event)">
                    <h3 class="title" >{{favorit.nameDisplay}}</h3>
                </a>
                <img src="../assets/beerbootle.jpg" />
                <p>{{favorit.abv}}</p>
                <!-- <div>{{beer.name}}</div> -->
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
            console.log(e.target.parentElement.className)
            let productId = e.target.parentElement.className;
            this.$store.commit('setStoreBeerId', productId);
            console.log(this.$store.state.productId);
        }
    }
    
    
}
</script>

<style scoped lang="scss">

.beer-favorites{
    display: inline-block;
    width: 100%;
}

</style>

