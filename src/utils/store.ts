import {createStore} from "vuex";

const store = createStore({
    state: () => ({
        theme: 'light', // light, dark
        locale: 'ru' // ru, en
    }),
    mutations: {
        /**
         * Switch theme
         */
        changeTheme(state, value: 'light' | 'dark') {
            state.theme = value;
        },

        /**
         * Change locale
         */
        changeLocale(state, value: 'ru' | 'en') {
            state.locale = value;
        }
    }
})
