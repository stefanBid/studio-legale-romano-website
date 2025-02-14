//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BaseProfileImageBox } from '@/components';

const meta = {
  title: 'Components/Base/ProfileImageBox',
  component: BaseProfileImageBox,
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      description: 'The profile image box avatar image object (imageUrl, alt)',
      control: {
        type: 'object',
      },
    },
    name: {
      description: 'The name of the person',
      control: {
        type: 'text',
      },
    },
    surname: {
      description: 'The surname of the person',
      control: {
        type: 'text',
      },
    },
    type: {
      description: 'The border radius of the profile image box',
      control: {
        type: 'select',
        options: ['square', 'circle'],
      },
    },
    ciustomSize: {
      description: 'The custom size of the profile image box',
      control: {
        type: 'boolean',
      },
    },
    dataTestid: {
      description: 'The profile image box data-testid attribute',
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      description: 'The profile image box aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    name: 'John',
    surname: 'Doe',
    dataTestid: 'profile-image-box-test',
    ariaLabel: 'profile-image-box',
  },
} satisfies Meta<typeof BaseProfileImageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SquareProfileImageBox: Story = {
  args: {
    ...meta.args,
    type: 'square',
  },
};

export const CircleProfileImageBox: Story = {
  args: {
    ...meta.args,
    type: 'circle',
  },
};

export const WithAvatarProfileImageBox: Story = {
  args: {
    ...meta.args,
    avatar: {
      imageUrl: 'https://picsum.photos/200/300',
      alt: 'John Doe',
    },
  },
};
