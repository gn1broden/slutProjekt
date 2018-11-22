<template>
    <div class="beerList">
        <h1>Öl listning</h1>
        <div class="select-wrapper">
            <span>Gå till sida:</span>
            <select name="select-beer" id="select-beer" v-on:change="changePage">
                <option  v-for="page in pageList" v-bind:key="page.page_id" v-bind:value="page">{{page}}</option>
            </select>
        </div>
        <div class="beer-list">
            <div class="beer" v-for="beer in beerList" v-bind:key="beer.id">
                <h3 class="title">{{beer.nameDisplay}}</h3>
                <img src="../assets/beerbootle.jpg" />
                <p>{{beer.abv}}</p>
                <!-- <div>{{beer.name}}</div> -->
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
            beerList:[],
            totalPages: 1,
            pageList:[]
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
            this.beerList = resp.data.data;
            this.totalPages = parseInt(resp.data.numberOfPages);
            console.log(this.totalPages);
            this.makeOptions();
            })
            .catch(err => console.log(err));
        },
        makeOptions(){
            for(let i=1; i<=this.totalPages; i++ ){
                this.pageList.push(i);
                //console.log(this.pageList);
                // let select = document.querySelector("#select-beer");
                // console.log(select);
                // var option = document.createElement(`<option name="${i}" value="${i}">${i}</option>`);
                // select.appendChild(option);
            }
        },
        changePage(){
            let beerSelect = document.querySelector("#select-beer");
            console.log(beerSelect);
            console.log("https://sandbox-api.brewerydb.com/v2/beers?p="+beerSelect.value.toString()+"&key=a8079a799453779042699fa42859cec9");
            this.url = "https://sandbox-api.brewerydb.com/v2/beers?p="+beerSelect.value.toString()+"&key=a8079a799453779042699fa42859cec9";
            this.loadBeers();
        }
    }
}

</script>

<style lang="scss" scoped>
    .beerList{
        display: inline-block;
        //This is just the template
    }
    .beer-list{
        display: inline-block;
    }
    .beer{
        display: inline-block;
        width: 18%;
        margin-right: 0.8%;
        margin-bottom: 30px;
        float: left;
        border: 1px solid #eee;
        padding: 5px;
        min-height: 350px;
        .title{
            min-height:40px;
        }
        img{
            max-width: 100px;
        }

    }
    .select-wrapper{
        display: inline-block;
        width: 100%;
        margin-bottom: 15px;
        span{
            text-align: right;
        }
        select{
        height: 36px;
        width: 50px;
        padding-left: 7px;
        font-size: 16px;
        float: right;
        }
    }
    

</style>


