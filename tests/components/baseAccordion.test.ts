import { render, screen, fireEvent, waitFor } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { BaseAccordion } from '../../src/components';

describe('BaseAccordion Unit Tests', () => {
  describe('Props', () => {
    it('set the correct id attribute to the accordion button', () => {
      render(BaseAccordion, {
        props: {
          id: 'custom-base-accordion-button-id',
          dataTestid: 'custom-base-accordion',
        },
      });
      const accordionButton = screen.getByTestId('custom-base-accordion-button');
      expect(accordionButton).toHaveAttribute('id', 'custom-base-accordion-button-id');
    });

    it('initial state is closed', () => {
      render(BaseAccordion, {
        props: {
          dataTestid: 'custom-base-accordion',
        },
      });
      const accordionBody = screen.queryByTestId('custom-base-accordion-content');
      expect(accordionBody).not.toBeInTheDocument();
    });

    it('open the accordion by default', () => {
      render(BaseAccordion, {
        props: {
          externalOpen: true,
          dataTestid: 'custom-base-accordion',
        },
      });
      const accordionBody = screen.queryByTestId('custom-base-accordion-content');
      expect(accordionBody).toBeInTheDocument();
    });
  });
  describe('Events', () => {
    it('open the accordion when clicking the button', async () => {
      render(BaseAccordion, {
        props: {
          dataTestid: 'custom-base-accordion',
        },
      });
      const accordionButton = screen.getByTestId('custom-base-accordion-button');
      expect(screen.queryByTestId('custom-base-accordion-content')).not.toBeInTheDocument();
      await fireEvent.click(accordionButton);
      waitFor(() => {
        expect(screen.getByTestId('custom-base-accordion-content')).toBeInTheDocument();
      });
    });
  });
});
