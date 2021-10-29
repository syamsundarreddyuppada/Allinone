<template>
  <div class="nameblock">
    <v-container>
      <v-form>
        <v-btn text @click="deleteNameBlock(arr.id)" class="myclose red--text">
          <v-icon medium>fa-times</v-icon>
        </v-btn>
        <v-row>
          <v-col cols="12" class="px-3 py-0">
            <v-text-field label="name" v-model="arr.name"></v-text-field>
          </v-col>

          <v-col cols="12" class="px-3 py-0">
            <v-text-field
              class="ipafields"
              label="age"
              type="number"
              placeholder="age"
              v-model="arr.age"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import { vxm } from "../store/store.vuex";
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    arr: Object,
  },
})
export default class NameField extends Vue {
  data = vxm.user;

  deleteNameBlock(id: number) {
    console.log("from Parent delete", id);
    this.$emit("alert");

    this.data.deleteNameBlock(id);
  }
}
</script>

<style lang="css" scoped>
.myclose {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.nameblock {
  border: 1px solid lightgray;
  background-color: #fafafa;
  margin: 10px;
  width: 300px;
}
</style>
