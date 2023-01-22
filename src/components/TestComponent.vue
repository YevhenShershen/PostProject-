<template>
  <v-row>
    <PersonsInformation :persons="persons"></PersonsInformation>
    <AddPerson :persons="persons"></AddPerson>
    <ChangeInfoPerson :persons="persons"></ChangeInfoPerson>
    <button @click="call()">Save</button>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";

@Component({
  components: {},
  methods: mapActions(["fetchPersons"]),
  computed: {
    ...mapGetters(["receivingPersons", "receivingPersonsName"]),
    ...mapState(["persons"]),
  },
})
export default class TestComponent extends Vue {
  public persons = this.$store.state.persons.persons;
  async mounted() {
    // this.$store.dispatch("fetchPersons")
    this.$store.dispatch("fetchPersons");
  }
  public call() {
    console.log(this.persons);
  }
}
</script>

<style scoped lang="scss"></style>
