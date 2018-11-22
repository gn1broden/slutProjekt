<template>
    <div class="startPage">
        <h1>{{msg}}</h1>
        <section class="sektionOne">
            <h2>En random öl</h2>
            <randomBeer />
        </section>
        <section class="sektionTwo">
            <p>sektion 2</p>
        </section>
        <section class="sektionTree">
            <p>sektion 3</p>
        </section>
    </div>
</template>



<script>
import randomBeer from '@/components/randomBeer.vue'

export default {
  name: 'startPage',
  components:{
      randomBeer
  },
  props: {
    msg: String
  }
  
}
</script>
