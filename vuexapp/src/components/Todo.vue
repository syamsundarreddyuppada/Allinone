<template>
        <div class="flex">
            <h1>{{id +1}} </h1>
            <h2  class="col">{{title}}</h2>
            <button class="btn btn-primary mx-5" @click="edittodo(id)" >Edit</button>
            <button class=" btn btn-danger" @click="deltodo(id)">Delete</button>
        </div>

    
</template>

<script>
import {mapActions} from "vuex"
    export default {
        name:"todo",
        props :{
            title : String,
            id : Number

        },
        methods : {
            ...mapActions(["deltodo","edittodo"]),
        }
        
       
    }
</script>

<style lang="css" scoped>
.flex{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>