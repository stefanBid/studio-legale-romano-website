<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import MdiCloseThick from '~icons/mdi/close-thick';
import { BaseButton } from '@/components';
import { useStyleStore } from '@/stores';

interface BaseDialogProps {
  isOpen: boolean;
  headerOrientation?: 'left' | 'center' | 'right';
  dialogSize?: 'small' | 'medium' | 'large';
  blockDialogHeight?: boolean;
  dialogTitle?: string;
  hideDialogHeader?: boolean;
  onCloseModal: (falsyValue: false) => void;
}

const props = withDefaults(defineProps<BaseDialogProps>(), {
  dialogSize: 'large',
  blockDialogHeight: false,
  hideDialogHeader: false,
  dialogTitle: undefined,
  headerOrientation: 'left',
});

// Store Declarations
const styleStore = useStyleStore();

// Feature 1: Send Close Modal Event
const handleCloseModal = (): void => {
  props.onCloseModal(false);
};
</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" class="relative overflow-hidden" @close="handleCloseModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/95 z-rm-dialog-overlay"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto z-rm-dialog scrollbar-gutter-stable">
        <div
          :class="[
            styleStore.containerPadding,
            {
              'py-6':
                styleStore.activeBreakpoint !== 'xs' &&
                styleStore.activeBreakpoint !== 'sm' &&
                styleStore.activeBreakpoint !== 'md',
              'py-5': styleStore.activeBreakpoint === 'md',
              'py-4': styleStore.activeBreakpoint === 'sm' || styleStore.activeBreakpoint === 'xs',
            },
          ]"
          class="flex items-center justify-center h-screen transition-all duration-300 ease-in-out"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="[
                props.hideDialogHeader ? undefined : styleStore.elementTotalPaddingM,
                {
                  'w-[45%]':
                    props.dialogSize === 'small' &&
                    styleStore.activeBreakpoint !== 'xs' &&
                    styleStore.activeBreakpoint !== 'sm',
                  'w-[65%]':
                    props.dialogSize === 'medium' &&
                    styleStore.activeBreakpoint !== 'xs' &&
                    styleStore.activeBreakpoint !== 'sm',
                  'w-[85%]':
                    props.dialogSize === 'large' &&
                    styleStore.activeBreakpoint !== 'xs' &&
                    styleStore.activeBreakpoint !== 'sm',
                  'w-full':
                    styleStore.activeBreakpoint === 'xs' || styleStore.activeBreakpoint === 'sm',

                  'h-fit max-h-full': !props.blockDialogHeight,
                  'h-full': props.blockDialogHeight,
                },
              ]"
              class="flex flex-col overflow-hidden transition-all duration-300 ease-in-out transform bg-white border-2 rounded shadow-lg gap-y-6 border-rm-secondary"
            >
              <div
                v-if="!props.hideDialogHeader"
                class="flex justify-between overflow-hidden cursor-default shrink-0 gap-x-6"
              >
                <div
                  :class="{
                    'text-left': props.headerOrientation === 'left',
                    'text-center': props.headerOrientation === 'center',
                    'text-right': props.headerOrientation === 'right',
                  }"
                  class="flex-1 overflow-x-hidden transition-all duration-300 ease-in-out"
                >
                  <h3
                    v-show="props.dialogTitle"
                    id="modal-title"
                    :class="[styleStore.textSizeL]"
                    class="font-bold truncate whitespace-normal transition-all duration-300 ease-in-out text-rm-secondary font-playfair"
                  >
                    {{ props.dialogTitle }}
                  </h3>
                </div>
                <BaseButton
                  class="border border-transparent rounded text-rm-main w-fit h-fit hover:rotate-90 focus-visible:border-rm-main"
                  :aria-label="`close ${props.dialogTitle} modal`"
                  variant="custom"
                  size="custom"
                  @click.stop="handleCloseModal"
                  @keydown.enter.stop="handleCloseModal"
                >
                  <MdiCloseThick :class="[styleStore.iconSizeS]" class="stroke-[2.5px]" />
                </BaseButton>
              </div>
              <slot name="modal-content" :close-modal="handleCloseModal"></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
