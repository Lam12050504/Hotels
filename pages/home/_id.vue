/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
    <div class="app-container">
        <property-gallery :images="home.images" />
        <property-detail :home="home" />>
        <div style="display:flex;">
            <img v-for="img in home.images" :key="img" width="200px" height="200px" :src="img" alt="">
        </div>
        {{home.title}} <br/>
        ${{home.pricePerNight}} /night <br/>
        <img src="/images/marker.svg" width="20" height="20" alt="">{{home.location.address}} {{home.location.city}} {{home.location.state}} {{home.location.country}} <br/>
        <img src="/images/star.svg" width="20" height="20" alt="">{{home.reviewValue}} <br/>
        {{home.guest}} guest, rooms, {{home.beds}} beds, {{home.bathroom}} bath <br/>

        <h3>This is my review</h3>

        <div v-for="rev in reviews" :key="rev.objectID">
            <img :src="rev.reviewer.image" alt=""> <br>
            {{rev.reviewer.name}} <br>
            {{formattingDate(rev.date)}} <br>
           <short-text :text="rev.comment" :target="300"/> <br>
        </div>
        <img :src="users.image" alt="">
    </div>
</template>

<script>
import PropertyDetail from '../../components/PropertyDetail.vue'
import PropertyGallery from '../../components/PropertyGallery.vue'
import ShortText from '../../components/ShortText.vue'
    export default {
  components: { ShortText, PropertyGallery, PropertyDetail },
        async asyncData({params,$dataApi,error}) {
            const responses = await Promise.all([
                $dataApi.getHome(params.id),
                $dataApi.getReviewByHomeId(params.id),
                 $dataApi.getUserByHomeId(params.id)
            ])
            const badResponse = responses.find((response) => !response.ok)
           if(badResponse) return error({statusCode: badResponse.status, message:badResponse.statusText})
            
            return {
             home:responses[0].json,
             reviews : responses[1].json.hits,
             users: responses[2].json.hits[0]
         }
         
        },
        head() {
            return {
                title: this.home.title,
            }
        },
        methods: {
            formattingDate(dateStr) {
                const date = new Date(dateStr)
                return date.toLocaleString(undefined,{month:'long',year:'numeric'})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>