<template>
  <div class="home">
    <startPage msg="Välkommen!"/>
  </div>
</template>

<script>

// @ is an alias to /src
import startPage from '@/components/startPage.vue'

export default {
  name: 'home',
  components: {
    startPage
  }
}
</script>
