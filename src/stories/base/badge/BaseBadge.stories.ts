//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { TagIcon } from '@heroicons/vue/24/outline';

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
    iconSize: {
      description: 'The badge icon size',
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    textContent: {
      description: 'The badge text content',
      control: {
        type: 'text',
      },
    },
    dataTestid: {
      description: 'The badge data-testid attribute',
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      description: 'The badge aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    icon: TagIcon,
    dataTestid: 'badge-test',
    ariaLabel: 'badge',
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

export const BadgeWithSmallIcon: Story = {
  args: {
    ...meta.args,
    textContent: 'Lorem ipsum dolor sit amet',
    iconSize: 'small',
  },
};
