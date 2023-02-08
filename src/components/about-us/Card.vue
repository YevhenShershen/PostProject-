<template>
  <v-col
    xl="4"
    lg="4"
    md="5"
    sm="12"
    xs="12"
    class="d-flex justify-space-around"
  >
    <router-link
      :to="`/employee/id/${employee.id}`"
      class="text-decoration-none"
    >
      <div class="card d-flex flex-column align-center">
        <p class="card_company-name">
          {{ companyInformation.name }}
        </p>
        <img
          alt=""
          class="card_personal-photo"
          src="~@/assets/images/employees/employee.jpg"
        />
        <p class="card_personal-name">{{ employee.name }}</p>
        <p class="card_personal-profession">{{ profession }}</p>
        <p class="card_personal-information">ID:{{ employee.id }}</p>
        <p class="card_personal-information">EMAIL:{{ employee.email }}</p>
        <p class="card_personal-information">TEL:{{ employee.phone }}</p>
      </div>
    </router-link>
  </v-col>
</template>

<script lang="ts">
import { Employee, ICompanyInformation } from "@/store/types";
import { Vue, Component, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters({
      companyInformation: "companyInformation/COMPANY_INFORMATION",
    }),
  },
})
export default class Card extends Vue {
  @Prop({ required: true }) readonly employee!: Employee;
  public profession = "programista";
  public companyInformation!: ICompanyInformation;
}
</script>
<style lang="scss" scoped>
.card {
  background-image: url("~@/assets/images/employees/card.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 15px;
  min-width: 374px;
  &_company-name {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  &_personal-photo {
    border-radius: 100%;
    box-shadow: 0 0 0 3px #3a3d40, 0 0 13px #3a3d40;
    width: 120px;
  }

  &_personal-name {
    margin-top: 30px;
  }

  &_personal-profession {
  }

  &_personal-information {
    border-bottom: 2px dotted #3a3d40;
    width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.card_personal-information:last-child {
  margin-bottom: 80px;
}
</style>
