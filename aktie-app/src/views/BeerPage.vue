<template>
    <div>
       <beerInfo /> 
    </div>
</template>


<script>

// @ is an alias to /src
import beerInfo from '@/components/beerInfo.vue'

export default {
  name: 'BeerPage',
  components: {
    beerInfo
  },
}
</script>