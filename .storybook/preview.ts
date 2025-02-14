import type { Preview } from '@storybook/vue3';
import { router } from '../src/router/index';
import { setup } from '@storybook/vue3';
import '../src/style/index.css';

import { createPinia } from 'pinia';

setup((app) => {
  const pinia = createPinia();
  app.use(pinia);
  app.use(router);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
