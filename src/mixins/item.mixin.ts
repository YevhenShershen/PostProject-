import { Component, Vue } from "vue-property-decorator";
//тут можем создавать переменные и функции и использовать их во всем проекте
@Component
class ItemMixin extends Vue {
  sumTwoNumbers() {
    return 3 + 5;
  }
}
export default ItemMixin;
