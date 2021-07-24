<template>
  <div>
    <div class="app-search">
      <input type="text" v-model="search" placeholder="Search hotel..">
      <input type="text" class="datepicker" placeholder="Check in">
      <input type="text" class="datepicker" placeholder="Check out">
      <button>
        <img src="/images/icons/search.svg" alt="">
      </button>
    </div>
   
    <div v-for="home in  filterHomes" :key="home.objectID" style="flex-basis: 15rem">
      <nuxt-link :to="`/home/${home.objectID}`" prefetch>    
      <img :src="home.images[0]" alt="" style="width:300px" /><br/>
    {{home.title}} <br>
    {{home.location.address}} {{home.location.city}} {{home.location.state}} <br>
    {{home.guest}} guest <br>
    {{home.pricePerNight}} / night <br></nuxt-link>
    <img src="/images/star.svg" width="20" height="20"/> {{home.reviewValue}}
    </div>
  </div>
</template>

<script>
import homes from "~/data/homes";
export default {
   data() {
     return {
       homes,
       search: ''
     }
   },
   computed: {
     filterHomes() {
        return this.homes.filter(home => {
        return home.title.toLowerCase().includes(this.search.toLowerCase())
      })
     }
   }
}
</script>

<style lang="scss" scoped>

</style>