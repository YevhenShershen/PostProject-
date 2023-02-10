<template>
  <div class="order">
    <h2 class="app-title main-title">Formularz kontaktowy</h2>
    <v-row>
      <v-col xl="4" lg="4" md="12" sm="12" class="order_company-info">
        <h3 class="app-title2">{{ company.name }} Sp. z o.o.</h3>
        <p class="order_adress">
          ul. {{ company.street }} {{ company.number }}
        </p>
        <p class="order_adress">
          {{ company.code }} {{ company.country }} miasto
        </p>
        <a :href="`tel:${company.phoneNumber}`" class="order_adress"
          >tel: {{ company.phoneNumber }}</a
        >
        <br />
        <a :href="`mailto:${company.email}`" class="order_adress"
          >e-mail:{{ company.email }}</a
        >
        <p class="order_adress">{{ company.workTime }}</p>
      </v-col>
      <v-col xl="6" lg="6" md="12" sm="12" class="order_contact-form">
        <form action="" class="order_form">
          <h3 class="app-title2 text-center">Formularz kontaktowy</h3>
          <v-row no-gutters class="order_shell">
            <v-col xl="6" lg="12" md="12" sm="12" xs="12">
              <input type="text" placeholder="Firm" class="order_input" />
            </v-col>
            <v-col xl="6" lg="12" md="12" sm="12" xs="12">
              <input
                type="text"
                placeholder="Imię i Nazwisko"
                class="order_input"
              />
            </v-col>
            <v-col xl="6" lg="12" md="12" sm="12" xs="12">
              <input type="tel" placeholder="Telefon" class="order_input" />
            </v-col>
            <v-col xl="6" lg="12" md="12" sm="12" xs="12">
              <input
                type="email"
                placeholder="Adress e-mail"
                class="order_input"
              />
            </v-col>
            <div class="order_textarea-field">
              <textarea
                rows="8"
                placeholder="Twoja wiadomość"
                class="order_textarea"
              ></textarea>
            </div>
            <v-col cols="12">
              <label>
                <input type="checkbox" /><span class="order_text-checkbox"
                  >Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                  IT Company sp. z o.o. w celu udzielenia odpowiedzi na
                  zapytanie i przesłanie informacji.</span
                ></label
              ></v-col
            >
            <v-col cols="12">
              <label>
                <input type="checkbox" /><span class="order_text-checkbox"
                  >Zapoznałem się z polityką prywatności i zawartymi w niej
                  informacjami w zakresie przetwarzania podanych przeze mnie
                  danych osobowych.</span
                ></label
              >
            </v-col>
          </v-row>

          <div class="d-flex justify-center">
            <button class="app-btn order_btn">Wyślij wiadomość</button>
          </div>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class OrderForm extends Vue {
  company = this.$store.state.companyInformation;
}
</script>
<style lang="scss" scoped>
.order {
  margin-bottom: 30px;
  &_company-info {
  }

  &_title {
    color: #373a3d;
    font-size: 30px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 30px;
  }

  &_adress {
    margin: 0;
    text-decoration: none;
  }

  &_contact-form {
  }

  &_form {
    background-color: #f7f7f7;
    box-shadow: 0px 5px 25px 0px rgb(189 189 189);
    padding: 35px;
  }
  &_textarea-field {
    width: 100%;
  }
  &_shell {
  }
  &_input {
    border-bottom: 2px solid #3a3d40;
    width: 90%;
    margin-bottom: 30px;
  }

  &_textarea {
    width: 100%;
  }

  &_text-checkbox {
    font-size: 12px;
    margin-left: 5px;
  }

  &_btn {
    border-radius: 0;
    margin-top: 25px;
  }
}
.order_input:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}

@media (max-width: 600px) {
  .order_shell {
    display: flex;
    flex-direction: column;
  }
}
</style>
