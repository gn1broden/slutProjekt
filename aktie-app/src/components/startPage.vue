<template>
    <div class="startPage">
        <h1>{{msg}}</h1>
        <section class="sektionOne">
            <p>Stock test</p>
            <stockTest />
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
import stockTest from '@/components/stockTest.vue'

export default {
  name: 'startPage',
  components:{
      stockTest
  },
  props: {
    msg: String
  }
  
}
</script>
