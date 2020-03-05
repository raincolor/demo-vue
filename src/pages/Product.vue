<template>
  <div>Product</div>
</template>

<script>
export default {
  created () {
     console.log(this)
      console.log(this.$route)
      console.log(this.$route.params)
    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>
