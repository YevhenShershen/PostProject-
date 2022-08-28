<template>
  <v-main>
    <v-row v-resize="onResize">
      <v-col class="mx-3">
        <h1>Signup</h1>
        <v-form ref="signUpForm" v-model="formValidity">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
          ></v-text-field>
          <v-autocomplete
            label="Which browser do you use?"
            :items="browsers"
          ></v-autocomplete>
          <v-file-input label="Attach profile picture"></v-file-input>
          <v-text-field
            label="Birthday"
            v-model="birthday"
            readonly
          ></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox
            label="Agree to terms & conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          ></v-checkbox>
          <v-btn
            type="submit"
            color="primary"
            class="mr-4"
            :disabled="!formValidity"
            >Submit</v-btn
          >
          <v-btn
            type="submit"
            color="success"
            class="mr-4"
            @click="validateForm"
            >Validate Form</v-btn
          >
          <v-btn color="warning" @click="resetValidation" class="mr-4"
            >Reset Validation</v-btn
          >
          <v-btn color="error" @click="resetForm">Reset</v-btn>
        </v-form>
        <!--
        с помощью этого можем работать с элементами при определенной шириной
        https://vuetifyjs.com/en/directives/resize/ -->
        <h1>Width: {{ windowSize }}</h1>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [
      (value) =>
        !!value ||
        "You must agree to the terms and conditions to sign up for an account",
    ],
    browsers: ["Chrome", "Firefox", "Safari", "Edge"],
    birthday: "",
    email: "",
    emailRules: [
      (value) => !!value || "Email is required.",
      (value) => value.indexOf("@") !== 0 || "Email should have a user name.",
      (value) => value.includes("@") || "Email should include an @ symbol.",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain.",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension.",
    ],
    formValidity: false,
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
  mounted() {
    this.onResize();
  },
};
</script>
<!-- https://vuetifyjs.com/en/components/forms/ -->
