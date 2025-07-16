//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import MdiTag from '~icons/mdi/tag';

import { BaseBadge } from '@/components';

const meta = {
  title: 'Components/Base/Badge',
  component: BaseBadge,
  tags: ['autodocs'],
  argTypes: {
    default: {
      description: 'The default slot content',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'The badge icon',
      control: {
        type: 'object',
      },
    },
    textContent: {
      description: 'The badge text content',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    icon: MdiTag,
  },
} satisfies Meta<typeof BaseBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    ...meta.args,
    textContent: 'Lorem ipsum dolor sit amet',
  },
};
