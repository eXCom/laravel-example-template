import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // For icons, optional

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'light', // You can define a custom theme or use default
    },
});

export default vuetify;
