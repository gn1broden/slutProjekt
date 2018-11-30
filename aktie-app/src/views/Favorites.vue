<template>
  <div class="favorites">
    <h1>Dina favoriter</h1>
    <beerFavorites />
  </div>
</template>

<script>

import beerFavorites from '@/components/beerFavorites.vue'

export default {
  name: "Favorites",
  components: {
    beerFavorites
  }
}
</script>