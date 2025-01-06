//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import { TheInlineNavbar } from '@/components';

const meta = {
  title: 'Components/Layout/TheInlineNavbar',
  component: TheInlineNavbar,
  tags: ['autodocs'],
  argTypes: {
    routes: {
      description: 'The routes',
      control: {
        type: 'object',
      },
    },
  },
  args: {
    routes: [
      {
        path: '/',
        text: 'Home',
      },
      {
        path: '/prestazioni',
        text: 'Prestazioni',
      },
      {
        path: '/collaborazioni',
        text: 'Collaborazioni',
      },
      {
        path: '/contatti',
        text: 'Contatti',
      },
      {
        path: '/chi-siamo',
        text: 'Chi siamo',
      },
    ],
  },
} satisfies Meta<typeof TheInlineNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
