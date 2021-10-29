<template>
  <div id="app">
    <div v-show="notify" class="alert alert-success" role="alert">
  {{del ? "deleted" : "Added" }}succesfully
</div>
   <form class="row g-3" @submit.prevent="addtodo(todotext)">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Name</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Todo">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Name</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="name" v-model="todotext">
  </div>
  <div class="col-auto">
    <button type="submit"  class="btn btn-primary mb-3">Add</button>
    <button type="button"  class="btn btn-primary mb-3 mx-5" @click.prevent="japi">Json</button>
  </div>
</form>
<span v-if="gettodos.length>=1"><span v-for="(gettodo,index) in gettodos" :key="index"> <Todo :title="gettodo" :id="index" /> </span></span>
<h2 v-else>Please enter some data</h2>

    

  </div>
</template>

<script>
import {mapGetters,mapState} from "vuex"

import Todo from './components/Todo.vue'

export default {
  name: "App",
  components: {
    Todo
   
  },
  data(){
    return{
      todotext: "",
      notify: false

    }
  },
  methods : {
   addtodo(todotext){
     this.$store.dispatch('addtodo',todotext);
     this.todotext = ""


   },
   japi(){
     this.$store.dispatch("japi")

   }
   
   

  },
   computed: {
     ...mapGetters(["gettodos"]),
     ...mapState(["del"])
        
    },
    watch : {
      gettodos(value){
       
        if (value.length >=1) {
         
          
          this.notify = true
          setTimeout(() => {
            this.notify = false
          }, 1000);
       
          
        };
        
      }

    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1rem;
}
.alert{
 z-index: 100 !important;
    position: absolute !important;
    width: 100%;
    top: 0;
}
</style>
