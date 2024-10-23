<template>
    <v-container class="pa-4">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="elevation-12">
                    <v-card-title class="text-h5">Contact Us</v-card-title>
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
                            <v-textarea
                                v-model="message"
                                label="Message"
                                rows="4"
                                :rules="[rules.required]"
                                required
                            ></v-textarea>

                            <v-row justify="space-between" class="mt-4">
                                <v-col cols="auto">
                                    <router-link to="/" class="return-home">
                                        <v-btn color="secondary">
                                            Back to HomePage
                                        </v-btn>
                                    </router-link>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn color="primary" @click="submitForm">
                                        Submit
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-10">
            <v-col cols="12" class="text-center">
                <v-icon size="36">mdi-map-marker</v-icon>
                <p>123 Your Street, Your City, Your Country</p>

                <v-icon size="36">mdi-phone</v-icon>
                <p>+123 456 7890</p>

                <v-icon size="36">mdi-email</v-icon>
                <p>info@yourwebsite.com</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            rules: {
                required: (value) => !!value || 'Required.',
                email: (value) =>
                    /.+@.+\..+/.test(value) || 'E-mail must be valid.',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                // Handle form submission
                alert('Form submitted successfully!');
            }
        },
    },
};
</script>

<style scoped>
.v-icon {
    margin-bottom: 10px;
}
</style>
