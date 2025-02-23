//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BaseCarousel } from '@/components';
import { h, type VNode } from 'vue';

const createSlotComponent = (): VNode => {
  return h(
    'div',
    {
      class: 'h-[400px] flex w-full transition-all duration-300 ease-in-out',
    },
    [
      h('img', {
        src: 'https://picsum.photos/id/237/3000/300',
        alt: 'placeholder',
        class: 'object-cover w-full h-full',
      }),
    ],
  );
};

const meta = {
  title: 'Components/Base/Carousel',
  component: BaseCarousel,
  tags: ['autodocs'],
  argTypes: {
    numberOfItems: {
      description: 'The number of items to display in the carousel',
      control: {
        type: 'number',
      },
    },
    navigationDots: {
      description: 'Whether to show the navigation dots',
      control: {
        type: 'boolean',
      },
    },
    autoPlay: {
      description: 'Whether the carousel should auto-play',
      control: {
        type: 'boolean',
      },
    },
    autoPlayInterval: {
      description: 'The interval between auto-play transitions',
      control: {
        type: 'number',
      },
    },
    ariaLabel: {
      description: 'The carousel aria-label attribute',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    'carousel-item': createSlotComponent(),
    numberOfItems: 3,
    ariaLabel: 'carousel',
  },
} satisfies Meta<typeof BaseCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCarousel: Story = {
  args: {
    ...meta.args,
  },
};

export const AutoPlayCarousel: Story = {
  args: {
    ...meta.args,
    autoPlay: true,
    autoPlayInterval: 3000,
  },
};

export const NavigationDotsCarousel: Story = {
  args: {
    ...meta.args,
    navigationDots: true,
  },
};
