<template>
  <v-container class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="elevation-12">
          <v-card-title class="text-h5">Forgot Password</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[rules.required, rules.email]"
                  required
              ></v-text-field>

              <!-- Row for the buttons -->
              <v-row class="mt-4">
                <v-col cols="6">
                  <v-btn text color="secondary" @click="goToLoginPage">
                    Back to Login
                  </v-btn>
                </v-col>

                <v-col cols="6" class="d-flex justify-end">
                  <v-btn color="primary" @click="submitForm">
                    Send Reset Link
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbarVisible" :timeout="3000" color="success">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
      },
      snackbarVisible: false,
      snackbarMessage: '',
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.snackbarMessage = 'Password-reset link has been sent to: ' + this.email;
        this.snackbarVisible = true;
        this.email = "";
      }
    },
    goToLoginPage() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped></style>
