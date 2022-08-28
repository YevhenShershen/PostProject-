import { Component, Vue } from "vue-property-decorator";

@Component
class ItemMixin extends Vue {
  //тут можем создавать переменные и функции
  sumTwoNumbers() {
    return 3 + 5;
  }
}
export default ItemMixin;
