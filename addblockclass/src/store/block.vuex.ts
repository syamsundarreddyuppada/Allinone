import { createModule, mutation, action } from "vuex-class-component";
const VuexModule = createModule({
  namespaced: "block",
  strict: false,
});
export class block extends VuexModule {
  uid: number = Math.ceil(Math.random() * 1000);

  itemarr: any = [
    {
      id: this.uid,
      name: "",
      age: "",
    },
  ];

  @mutation add_Card_Block() {
    this.itemarr.push({
      id: Math.ceil(Math.random() * 1000),
      name: "",
      age: "",
    });
  }
  @mutation delete_Name_Block(data: any) {
    this.itemarr = this.itemarr.filter((item: any) => item.id !== data);
  }

  @action async addCardBlock() {
    console.log("datacard");
    this.add_Card_Block();
  }
  @action async deleteNameBlock(data: any) {
    console.log("action", data);
    this.delete_Name_Block(data);
  }
}
export default block;
