//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import { BaseButton } from '@/components';

const meta = {
  title: 'Components/Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Click me',
  },
};
