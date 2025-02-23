//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import { BaseCard } from '@/components';

const meta = {
  title: 'Components/Base/Card',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    header: {
      description: 'The card header slot',
      control: {
        type: 'text',
      },
    },
    content: {
      description: 'The card content slot',
      control: {
        type: 'text',
      },
    },
    headerType: {
      description: 'The card type',
      control: {
        type: 'select',
        options: ['default', 'custom'],
      },
    },
    contentType: {
      description: 'The card content type',
      control: {
        type: 'select',
        options: ['default', 'custom'],
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
    ariaLabel: {
      description: 'The card aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    ariaLabel: 'card',
  },
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    title: 'Card Title',
    textContent:
      'In voluptate magna cillum quis voluptate amet eiusmod nulla elit aute sint et culpa. Eiusmod esse incididunt sint Lorem duis aliqua deserunt laborum nulla incididunt. Pariatur aute est enim minim deserunt occaecat ipsum incididunt cillum labore Lorem ea magna. Incididunt incididunt incididunt nisi dolor fugiat deserunt est dolore tempor. Culpa pariatur mollit fugiat quis nostrud labore quis proident fugiat elit. Culpa anim labore mollit commodo nostrud exercitation dolor.',
  },
};
