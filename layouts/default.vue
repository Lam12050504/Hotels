<template>
    
    <div class="app">
        <header class="app-header">
            <img src="/images/logo.svg" alt="">
        <div class="app-user-menu">
            <template v-if="isLoggedIn">               
                <img src="/images/icons/house.svg" alt="">
                <div class="name">Host</div>
                <img :src="user.profileUrl" alt="" class="avatar">
            </template>
            <div id="googleButton" v-show="!isLoggedIn" class="ml-8" ></div>
        </div>
        </header>

        <nuxt/>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.auth.user
        },
        isLoggedIn() {
            return this.$store.state.auth.isLoggedIn
        }
    }
}
</script>
