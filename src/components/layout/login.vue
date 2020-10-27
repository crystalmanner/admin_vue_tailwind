<template>
  <v-container fluid>
    <!-- table start-->
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 pl-4>
        <v-layout row wrap>
          <div style="width: 100%">
            <h3 class="headline mb-0" style="color: #ffffff;">
              <strong>Login</strong>
            </h3>
          </div>
          <v-flex xs12 sm12 md12 lg12 xl12 class="login-form">
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-card style="height: 50vh;">
                  <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-flex xs12>
                        <v-text-field v-model="email" :rules="emailRules" label="email" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-model="password"
                          :rules="passwordRules"
                          :type="'password'"
                          label="password"
                          required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-btn fill color="success" @click="handleLogin">login</v-btn>
                      </v-flex>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import auth from "../../services/auth";
export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [v => !!v || "password is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    async handleLogin() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        let res = await auth.loginUser({
          email: this.email,
          password: this.password
        });
        if (!res.data.success) {
          alert("Wrong email or password!");
          return;
        }
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
.login-form {
  max-width: 400px;
  width: 100%;
}
</style>