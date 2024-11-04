import 'vuetify/styles'; // Importa os estilos do Vuetify
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // Suporte a ícones
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Configuração de tema (opcional)
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light', // ou 'dark' para um tema escuro
    themes: {
      light: {
        colors: {
          primary: '#6200ea', // Cor principal
          secondary: '#03dac6', // Cor secundária
        },
      },
    },
  },
});

export default vuetify;
