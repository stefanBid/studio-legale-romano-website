//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import MdiClockTimeNineOutline from '~icons/mdi/clock-time-nine-outline';
import { BaseChip } from '@/components';

const meta = {
  title: 'Components/Base/Chip',
  component: BaseChip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'The chip text',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'The chip icon',
      control: {
        type: 'text',
      },
    },
    variant: {
      description: 'The chip variant',
      control: {
        type: 'select',
        options: ['main', 'secondary'],
      },
    },
    ariaLabel: {
      description: 'The chip aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    text: 'Chip text',
    ariaLabel: 'chip',
  },
} satisfies Meta<typeof BaseChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainChip: Story = {
  args: {
    ...meta.args,
    variant: 'main',
  },
};

export const SecondaryChip: Story = {
  args: {
    ...meta.args,
    variant: 'secondary',
  },
};

export const WithIconChip: Story = {
  args: {
    ...meta.args,
    icon: MdiClockTimeNineOutline,
  },
};
