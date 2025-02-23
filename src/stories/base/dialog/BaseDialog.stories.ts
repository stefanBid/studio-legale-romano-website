//import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BaseDialog, BaseButton } from '@/components';
import { ref } from 'vue';

const meta = {
  title: 'Components/Base/Dialog',
  component: BaseDialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'The dialog visibility',
      control: {
        type: 'boolean',
      },
    },
    headerOrientation: {
      description: 'The dialog header orientation',
      control: {
        type: 'radio',
        options: ['left', 'center', 'right'],
      },
    },
    dialogSize: {
      description: 'The dialog size',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    blockDialogHeight: {
      description: 'The dialog height',
      control: {
        type: 'boolean',
      },
    },
    onCloseModal: {
      description: 'The dialog close event',
      action: 'close',
    },
  },
  args: {
    isOpen: false,
    onCloseModal: () => {},
  },
} satisfies Meta<typeof BaseDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDialog: Story = {
  args: {
    dialogTitle: 'Titolo della modale',
    headerOrientation: 'center',
    dialogSize: 'medium',
    blockDialogHeight: false,
  },

  render: ({
    _,
    __,
    ...filteredArgs
  }: {
    isOpen: boolean;
    onCloseModal: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) => ({
    components: { BaseDialog, BaseButton },
    setup() {
      const open = ref(false);
      const openModal = (): void => {
        open.value = true;
      };

      return {
        open,
        openModal,
        filteredArgs,
      };
    },
    template: `
      <div>
        <BaseButton @click="openModal">Apri Modale</BaseButton>
        <BaseDialog 
          v-bind="filteredArgs"
          :isOpen="open"
          :onCloseModal="(falsyValue) => { open = falsyValue }"
        >
          <template #modal-content>
            Contenuto della modale
          </template>
        </BaseDialog>
      </div>
    `,
  }),
};
