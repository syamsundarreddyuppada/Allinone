<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>{{hi}} </h2>
    <button @click="hello">hello</button>
    <input type="text" v-model="mytxt">
    <p>helloMsg: {{ helloMsg }}</p>
    <button @click="ts">hello</button>

      <p>
         <button @click="decrement">-</button>
      Clicked: {{ count }} times
      <button @click="increment">+</button>
    </p>
    
   
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component, Prop, Vue } from "vue-property-decorator";
import Classextend from "./Classextend.vue";
import Max from "./Max.vue";
import Min from "./Min.vue";

@Component({
  components: {
    Classextend,
  },
})
export default class HelloWorld extends mixins(Max,Min) {
  @Prop() private msg!: string;
  mytxt: string; 
  count=0 as number;

   helloMsg: string ;
   ts():void{
     this.helloMsg=this.mytxt;
      
      
    
   }

   increment():number{
    return this.count++;
   }
   decrement():number{
    return this.count--;
   }
 
  
  data(){
    return{
      hi: "data",
      text : "",
      ttext:"" ,
      
    }

  }


  created(){
    console.log(this.mix,this.mix1,this.mix0,this.mix2);
    
  }
  
  hello(){
    console.log("hii");
    
  }
  
  
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
