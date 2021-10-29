import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export default new Vuex.Store({
  
  state: {
    count : 0,
    msg : "",
    todos: [
     
    
  ],
  japi:[],
  del : false
  },
  mutations: {
    increment(state){
      state.count++
    },
    updateMessage(state,pay){
      state.msg = pay;
    },
    add_todo(state,todo){
      state.todos.push(todo);
      
    },
    rem_todo(state,id){
      state.todos.splice(id,1)
      
      
 
      
    
      
     
      

    },
    msg(state,edit){
      state.msg = edit;

    },
    edit_todo(state,id){
      state.todos.splice(id,1);
      state.todos.splice(id,0,state.msg)
      
    
     

    },
    japi(state,data){
      state.japi = data;
      state.japi.map(item => {
        state.todos.push(item.title)
      });
      
     
    }
    

  },
  actions: {
    addtodo ({commit},todo){
      commit("add_todo",todo);
    },
    deltodo ({commit},id){
      commit("rem_todo",id);
      
      
    },
    edittodo({commit},id){
      var edit =prompt("enter to edit :");
      commit('msg',edit);
      commit("edit_todo",id)

     
      

    },
    async japi({commit}){
      let url = "https://jsonplaceholder.typicode.com/todos";
      let res = await fetch(url);
      let data = await res.json();
      commit("japi",data)
    }


   
  },
  getters : {
    donetodo : state => {
      return state.todos.filter(todo => todo.done);
    },
    donecount : (state,getters) =>{

      return getters.donetodo.length;
    },
    getTodoById: (state,id) => {
      return state.todos.find(todo => todo.id === id)
  },
  gettodos : (state) => state.todos


  },
  modules: {},
});
