<template>
    <v-container class="pa-4">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="elevation-12">
                    <v-card-title class="text-h5">Confirm Password</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field
                                v-model="password"
                                label="Password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                :rules="[rules.required]"
                                required
                            ></v-text-field>

                            <!-- Row for the buttons -->
                            <v-row class="mt-4">
                                <v-col cols="6">
                                    <v-btn text color="secondary" @click="goToHomePage">
                                        Back to Home
                                    </v-btn>
                                </v-col>

                                <v-col cols="6" class="d-flex justify-end">
                                    <v-btn color="primary" @click="submitForm">
                                        Confirm Password
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
            password: '',
            showPassword: false,
            rules: {
                required: (value) => !!value || 'Required.',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                alert('Password confirmed!');
            }
        },
        goToHomePage() {
            this.$router.push('/');
        },
    },
};
</script>

<style scoped></style>
