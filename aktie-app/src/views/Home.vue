<template>
  <div class="home">
    <startPage msg="This is maj sajt"/>
  </div>
</template>

<script>

// @ is an alias to /src
import startPage from '@/components/startPage.vue'

export default {
  name: 'startpage',
  components: {
    startPage
  }
}
</script>
