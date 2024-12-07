<template>
  <v-container class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="elevation-12">
          <v-card-title class="text-h5">Login</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[rules.required, rules.email]"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="showPassword = !showPassword"
                  :rules="[rules.required]"
                  required
              ></v-text-field>

              <!-- Forgot Password link -->
              <v-row>
                <v-col cols="12" class="d-flex justify-end">
                  <router-link to="/forgot-password" class="custom-link">Forgot your password?</router-link>
                </v-col>
              </v-row>

              <!-- Don't have an account? link -->
              <v-row>
                <v-col cols="12" class="d-flex justify-center">
                  <span class="text-caption">Don't have an account? <router-link to="/register" class="custom-link">Register here</router-link></span>
                </v-col>
              </v-row>

              <!-- Row for the buttons -->
              <v-row class="mt-4">
                <!-- Back to Home button -->
                <v-col cols="6">
                  <v-btn text color="secondary" @click="goToHomePage">
                    Back to Home
                  </v-btn>
                </v-col>

                <!-- Login button aligned to the right -->
                <v-col cols="6" class="d-flex justify-end">
                  <v-btn color="primary" @click="submitForm">
                    Login
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
import axios from '@/axios';
import { setToken } from '@/auth';
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) =>
            /.+@.+\..+/.test(value) || 'E-mail must be valid.',
      },
      snackbarVisible: false,
      snackbarMessage: '',
    };
  },
  mounted() {
    this.checkRegisterMessage();
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        try {
          const response = await axios.post('/api/login', {
            email: this.email,
            password: this.password,
          });

          setToken(response.data.token); // Save the token
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.$router.push({ path: '/', query: { login: 'success' } });
        } catch (error) {
          alert('Login failed: ' + error.response.data.message);
        }
      }
    },
    goToHomePage() {
      this.$router.push('/');
    },
    checkRegisterMessage() {
      const message = localStorage.getItem('registerSuccessMessage');
      if (message) {
        this.snackbarMessage = message;
        this.snackbarVisible = true;
        localStorage.removeItem('registerSuccessMessage'); // Clear after showing
      }
    },
  },
};
</script>

<style scoped>
.v-icon {
  margin-bottom: 10px;
}

/* Custom link styling */
.custom-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
}

.custom-link:hover {
  text-decoration: underline;
}

.text-caption {
  font-size: 0.9rem;
  color: #666;
}
</style>
