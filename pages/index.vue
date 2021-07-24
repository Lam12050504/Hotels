<template>
  <div>
    <div> 
        <home-card  homes:homes/>
    </div>
  </div>
</template>

<script>
import HomeCard from '~/components/HomeCard.vue';
import homes from "~/data/homes";
export default {
  data() {
    return {
      homes
    }
  },
  components:  {
    HomeCard
  },
  head() {
    return {
   
 title: "Homepage",
      meta: [{
          name: 'description',
          content: 'This is a homepage',
          hid: 'description',
      }]
    }
  },
}
</script>
