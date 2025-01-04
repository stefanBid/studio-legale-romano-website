import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Design/Typography',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    template: `
      <div class="space-y-10 p-6">
        <!-- Logo Simulation -->
        <div class="text-center">
          <h1 class="font-roboto text-rm-7xl font-extrabold">
            Studio Legale Romano
          </h1>
          <p class="font-merriweather text-rm-lg italic">
            "Your trusted legal advisors"
          </p>
        </div>

        <!-- Titles with different font weights -->
        <div class="space-y-4">
          <h1 class="font-roboto text-rm-6xl font-extrabold">H1: Our Expertise</h1>
          <h2 class="font-roboto text-rm-5xl font-bold">H2: Why Choose Us</h2>
          <h3 class="font-roboto text-rm-4xl font-semibold">H3: Trusted by Thousands</h3>
          <h4 class="font-roboto text-rm-3xl font-medium">H4: Tailored Legal Solutions</h4>
          <h5 class="font-roboto text-rm-2xl font-light">H5: Personalized Support</h5>
          <h6 class="font-roboto text-rm-xl font-thin">H6: Dedicated to Excellence</h6>
        </div>

        <!-- Paragraphs with different font weights -->
        <div class="space-y-4">
          <p class="font-merriweather text-rm-base font-light leading-relaxed">
            At Studio Legale Romano, we pride ourselves on offering tailored legal advice to individuals and businesses. 
            Our team of experienced lawyers ensures every case is handled with the utmost professionalism and care.
          </p>
          <p class="font-merriweather text-rm-sm font-regular leading-relaxed">
            Whether you're facing a corporate dispute or seeking personal legal assistance, 
            our firm is dedicated to protecting your rights and achieving the best possible outcomes.
          </p>
          <p class="font-merriweather text-rm-xs font-thin">
            We aim to make legal support accessible and straightforward for everyone.
          </p>
        </div>

        <!-- Notes -->
        <div>
          <p class="font-merriweather text-rm-xs font-italic">
            * All consultations are confidential and handled with care.
          </p>
        </div>
      </div>
    `,
  }),
};
