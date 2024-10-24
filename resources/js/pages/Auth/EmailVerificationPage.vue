<template>
  <v-container class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="elevation-12">
          <v-card-title class="text-h5">Email Verification</v-card-title>
          <v-card-text>
            <p>An email verification link has been sent to your email.</p>
            <p>If you haven't received the email, you can request another one below.</p>

            <!-- Resend verification link button -->
            <v-row class="mt-4">
              <v-col cols="6">
                <v-btn text color="secondary" @click="goToLoginPage">
                  Back to Login
                </v-btn>
              </v-col>

              <v-col cols="6" class="d-flex justify-end">
                <v-btn color="primary" @click="resendVerification">
                  Resend Verification Link
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    resendVerification() {
      alert('Verification link sent!');
    },
    goToLoginPage() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped></style>
