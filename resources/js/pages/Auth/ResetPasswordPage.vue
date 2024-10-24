<template>
    <v-container class="pa-4">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="elevation-12">
                    <v-card-title class="text-h5">Reset Password</v-card-title>
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
                                label="New Password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                :rules="[rules.required]"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="password_confirmation"
                                label="Confirm Password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                :rules="[rules.required, rules.matchPassword]"
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
                                        Reset Password
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
export default {
    data() {
        return {
            email: '',
            password: '',
            password_confirmation: '',
            showPassword: false,
            rules: {
                required: (value) => !!value || 'Required.',
                email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
                matchPassword: (value) => value === this.password || 'Passwords must match.',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                alert('Password has been reset!');
            }
        },
        goToLoginPage() {
            this.$router.push('/login');
        },
    },
};
</script>

<style scoped></style>
