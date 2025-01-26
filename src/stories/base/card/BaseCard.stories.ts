//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import { BaseCard } from '@/components';

const meta = {
  title: 'Components/Base/Card',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    default: {
      description: 'The default slot content',
      control: {
        type: 'text',
      },
    },
    title: {
      description: 'The card title',
      control: {
        type: 'text',
      },
    },
    textContent: {
      description: 'The card text content',
      control: {
        type: 'text',
      },
    },
    dataTestid: {
      description: 'The card data-testid attribute',
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      description: 'The card aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    default:
      'Officia voluptate amet tempor deserunt incididunt ipsum laboris excepteur consectetur laboris ea aliqua sit non. Pariatur nostrud labore ut excepteur sit excepteur nulla minim aliquip consequat in. Et culpa exercitation laboris et sunt commodo consequat amet laboris do.',
    dataTestid: 'card-test',
    ariaLabel: 'card',
  },
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    title: 'Card Title',
  },
};
