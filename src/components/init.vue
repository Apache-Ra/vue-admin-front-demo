<template>
  <div class="init">
  <p @click="replace">Init</p>
  </div>
</template>
<script>
export default {
  name: 'Init',
  data () {return {} },
  components:{},
  data(){ return{} },
  created(){},
  mounted(){},
  methods:{
    replace(){
      let vue = this
      // 字符串
      vue.$router.push('./test/pageOne')
      // 对象
      vue.$router.push({ path: '/test/pageOne' })
      // 命名的路由
      vue.$router.push({ name: 'pageOne', params: { userId: 123 }})
      // 带查询参数，变成 /register?plan=private
      vue.$router.push({ path: '/test/pageOne', query: { plan: 'private' }})
    }
  }
}
</script>

<style scoped>

</style>
