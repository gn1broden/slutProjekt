<template>
    <div class="beerBibliotek">
        <listBeer />
    </div>
</template>

<script>

import listBeer from '@/components/listBeer.vue'

export default {
  name: "BeerBibliotek",
  components: {
    listBeer
  }
}
</script>

