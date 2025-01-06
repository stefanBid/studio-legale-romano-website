//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { HomeIcon } from '@heroicons/vue/24/outline';

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
        options: ['secondary', 'custom'],
      },
    },
    contentSize: {
      description: 'The button size',
      control: {
        type: 'select',
        options: ['small', 'medium', 'custom'],
      },
    },
    spacingSize: {
      description: 'The button spacing',
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
    dataTestid: {
      description: 'The button data-testid attribute',
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      description: 'The button aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    default: 'Click me',
    dataTestid: 'button-test',
    ariaLabel: 'button',
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SmallButton: Story = {
  args: {
    contentSize: 'small',
  },
};

export const MediumButton: Story = {
  args: {
    contentSize: 'medium',
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
  },
};

export const IconButton: Story = {
  args: {
    default: '',
    icon: HomeIcon,
  },
};

export const CustomButton: Story = {
  args: {
    variant: 'custom',
    spacingSize: 'custom',
    contentSize: 'custom',
  },
};
