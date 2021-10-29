<template>
  <v-app style="background: rgb(58 70 96)">
    <v-app-bar color="rgb(23 197 133)" max-height="50px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <div v-if="itemarr.length >= 1" class="parEnt">
      <div class="widt" v-for="(item, index) in itemarr" :key="index">
        <NameField :arr="item" @alert="Alert" />
      </div>
    </div>
    <div v-else class="myaddelse">
      <h4 class="display-2 red--text text--accent-3 text--disabled text-center">
        Add Block To <span class="indigo--text text--darken-2">ShowData</span>
      </h4>
    </div>

    <div class="d-flex abb justify-center">
      <v-btn
        color="success"
        elevation="2"
        style="background: Aliceblue"
        large
        outlined
        @click="AddBlock"
        >AddBlock</v-btn
      >
    </div>

    <div class="d-flex justify-end mr-4">
      <v-alert dense outlined text v-show="successAlert" type="success">
        Added succussfully</v-alert
      >
      <v-alert dense outlined text v-show="alert" type="error">
        Deleted succussfully</v-alert
      >
      <v-btn
        class="white--text"
        color="primary"
        elevation="2"
        large
        @click="show"
        depressed
      >
        ShowCards
      </v-btn>
      <v-badge
        color="error"
        v-show="itemarr.length >= 1"
        :content="itemarr.length"
      >
      </v-badge>
    </div>
    <v-container v-if="itemarr.length >= 1">
      <div class="parEnt">
        <div
          class="widt"
          v-show="showDisplay"
          v-for="(item, index) in itemarr"
          :key="index"
        >
          <Cards :name="item" v-show="item.id >= 1" />
        </div>
      </div>
    </v-container>
    <v-container v-else
      ><h4
        class="display-2 red--text text--accent-3 text--disabled text-center"
      >
        Please Add <span class="teal--text text--darken-4">Data</span>
      </h4></v-container
    >
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar> </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Guest</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="(item, index) in itemarr" :key="index" link>
          <v-list-item-icon>
            {{ index + 1 }}
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-title>{{ item.age }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import { vxm } from "./store/store.vuex";
import { Component, Vue } from "vue-property-decorator";
import NameField from "./components/NameField.vue";
import Cards from "./components/Cards.vue";

@Component({
  components: {
    NameField,
    Cards,
  },
})
export default class App extends Vue {
  data = vxm.user;
  successAlert = false;
  alert = false;
  showDisplay = true;
  drawer = false;
  items = [
    { title: "Home", icon: "mdi-view-dashboard" },
    { title: "About", icon: "mdi-forum" },
  ];

  get itemarr() {
    return this.data.itemarr;
  }
  AddBlock() {
    this.successAlert = true;
    this.data.addCardBlock();
    setTimeout(() => {
      this.successAlert = false;
    }, 1000);
  }
  Alert() {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 1000);
  }
  show() {
    this.showDisplay = !this.showDisplay;

    console.log(this.itemarr);
  }
}
</script>

<style scoped>
.widt {
  width: 30%;
  margin: 10px;
}
.parEnt {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  min-height: 350px !important;
}
.abb {
  position: relative;
}
.myaddelse {
  height: 51vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
