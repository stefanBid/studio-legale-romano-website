//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import MdiHome from '~icons/mdi/home';

import { BaseButton } from '@/components';

const meta = {
  title: 'Components/Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    default: {
      description: 'The default slot content',
      control: {
        type: 'text',
      },
    },
    type: {
      description: 'The button type',
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    variant: {
      description: 'The button variant',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'custom'],
      },
    },
    size: {
      description: 'The button size',
      control: {
        type: 'select',
        options: ['small', 'medium', 'custom'],
      },
    },
    disabled: {
      description: 'The button disabled state',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      description: 'The button loading state',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    default: 'Button primary',
    variant: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    default: 'Button secondary',
    variant: 'secondary',
  },
};

export const SmallButton: Story = {
  args: {
    default: 'Button small',
    size: 'small',
  },
};

export const DisabledButton: Story = {
  args: {
    default: 'Button disabled',
    disabled: true,
  },
};

export const LoadingButton: Story = {
  args: {
    default: 'Button loading',
    loading: true,
  },
};

export const IconButton: Story = {
  args: {
    icon: MdiHome,
  },
};

export const CustomButton: Story = {
  args: {
    default: 'Button custom',
    variant: 'custom',
    size: 'custom',
  },
};
