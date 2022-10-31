<template>
  <div id="app">
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      tableData: {
      id_1: {
        name: "cup",
        price: "150",
      },
      id_2: {
        name: "book",
        price: "39",
      },
    } 
    }
  },
  created() {
    this.$http.get('/user') //拿到Mock数据
  }
  
}
</script>


