<template>
    <div style="text-align: center;">
        <img src="https://media.tenor.com/images/48e3ec491408bef5a9d2a4183bfc40a1/tenor.gif" width="200" height="200" alt=""> <br>
        <h1>Error</h1>
        {{error.message}} {{error.statusCode}}
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                required: true,
            }
        },
        head() {
            return {
                title: "Big Problem"
            }
        }
    }
</script>