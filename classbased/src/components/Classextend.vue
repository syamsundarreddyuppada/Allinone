<template>
    <div>
        <ul>
            <li>{{msg}} </li>
        </ul>



    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Classextend  extends Vue {
        superValue = 'Hello'
        
    }
</script>

<style scoped>

</style>