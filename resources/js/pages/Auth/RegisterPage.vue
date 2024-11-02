<template>
    <v-container class="pa-4">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="elevation-12">
                    <v-card-title class="text-h5">Register</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field
                                v-model="name"
                                label="Full Name"
                                :rules="[rules.required]"
                                required
                            ></v-text-field>

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
                                :rules="[rules.required, rules.minPassword]"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="confirmPassword"
                                label="Confirm Password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                :rules="[rules.required, rules.passwordMatch]"
                                required
                            ></v-text-field>

                          <!-- Already have an account? link -->
                          <v-row>
                            <v-col cols="12" class="d-flex justify-center">
                              <span class="text-caption">Already have an account? <router-link to="/login" class="custom-link">Log in</router-link></span>
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

                                <!-- Register button aligned to the right -->
                                <v-col cols="6" class="d-flex justify-end">
                                    <v-btn color="primary" @click="submitForm">
                                        Register
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import { setToken } from '@/auth';
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            rules: {
                required: (value) => !!value || 'Required.',
                email: (value) =>
                    /.+@.+\..+/.test(value) || 'E-mail must be valid.',
                minPassword: (value) =>
                    value.length >= 8 || 'Password must be at least 8 characters.',
                passwordMatch: (value) =>
                    value === this.password || 'Passwords must match.',
            },
        };
    },
    methods: {
        async submitForm() {
          if (this.$refs.form.validate()) {
            try {
              const response = await axios.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPassword,
              });

              localStorage.setItem('registerSuccessMessage', response.data.message);
              this.$router.push('/login');
            } catch (error) {
              if (error.response && error.response.data.errors) {
                // Display error messages if needed
                alert('Registration failed: ' + error.response.data.message);
              }
            }
          }
        },
        goToHomePage() {
            this.$router.push('/');
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
