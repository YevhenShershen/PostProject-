<template>
  <v-main>
    <v-card width="400" class="mt-5 mx-auto">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            :label="isLogin ? 'Mail' : 'incorrect mail'"
            prepend-icon="mdi-account-circle"
            v-model.trim="loginData.mail"
          ></v-text-field>
          <v-text-field
            :type="showPassword ? 'test' : 'password'"
            :label="isLogin ? 'Password' : 'incorrect password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model.trim="loginData.password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="info" @click="checkLoginData(loginData)">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface IAdmin {
  mail: string;
  password: string;
}
@Component({})
export default class HeaderApp extends Vue {
  name: any = "Login";
  showPassword: any = false;
  isLogin: boolean | string = true;
  admin: IAdmin = {
    mail: "admin@mail.com",
    password: "qwerty123A!",
  };
  loginData: IAdmin = {
    mail: "",
    password: "",
  };
  checkLoginData(arg: IAdmin): void {
    if (this.admin.mail == arg.mail && this.admin.password == arg.password) {
      this.isLogin = true;
      this.$router.push("/admin");
    } else {
      this.loginData = {
        mail: "",
        password: "",
      };
      this.isLogin = false;
    }
  }
}
</script>
