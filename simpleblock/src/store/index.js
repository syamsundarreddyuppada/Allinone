import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let uid = Math.ceil(Math.random() * 1000);

export default new Vuex.Store({
  state: {
    itemarr: [
      {
        id: uid,
        name: "",
        age: "",
      },
    ],
  },
  mutations: {
    key_Up(state, arr) {
      state.itemarr = state.itemarr.map((item) => {
        if (item.id === arr[1]) {
          let temp = item.age;
          return {
            name: arr[0],
            age: temp,
            id: arr[1],
          };
        } else {
          return item;
        }
      });
    },
    key_Up_Age(state, arr) {
      state.itemarr = state.itemarr.map((item) => {
        if (item.id === arr[1]) {
          let temp = item.name;
          return {
            name: temp,
            age: arr[0],
            id: arr[1],
          };
        } else {
          return item;
        }
      });
    },

    add_Card_Block(state) {
      state.itemarr.push({
        id: Math.ceil(Math.random() * 1000),
        name: "",
        age: "",
      });
    },
    delete_Name_Block(state, data) {
      state.itemarr = state.itemarr.filter((item) => item.id !== data);
    },
  },

  actions: {
    keyUp({ commit }, arr) {
      console.log("from Name", arr);

      commit("key_Up", arr);
    },
    keyUpAge({ commit }, arr) {
      console.log("from age", arr);

      commit("key_Up_Age", arr);
    },
    addCardBlock({ commit }) {
      console.log("datacard");
      commit("add_Card_Block");
    },
    deleteNameBlock({ commit }, data) {
      console.log("action", data);
      commit("delete_Name_Block", data);
    },
  },
  getters: {
    getName: (state) => state.itemarr,
  },
  modules: {},
});
