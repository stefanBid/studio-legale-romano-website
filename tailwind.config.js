/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: { max: '639px' },
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1535px' },
			'2xl': { min: '1536px' },
		},
		zIndex: {
			'rm-base-1': 100,
			'rm-base-2': 200,
			'rm-base-3': 300,
			'rm-base-4': 400,
			'rm-base-5': 500,
			'rm-header-collapsed': 950,
			'rm-header': 1000,
			'rm-dialog-overlay': 1050,
			'rm-dialog': 1100,
			'rm-dropdown': 1200,
			'rm-tooltip': 1300,
			'rm-notification': 1400,
		},
		fontFamily: {
			playfair: ['Playfair Display', 'serif'],
			lora: ['Lora', 'serif'],
		},		
		fontSize: {
			'rm-xs': '0.75rem',  // extra small
			'rm-sm': '0.875rem', // small
			'rm-base': '1rem',   // base
			'rm-lg': '1.125rem', // large
			'rm-xl': '1.25rem',  // extra large
			'rm-2xl': '1.5rem',  // 2 extra large
			'rm-3xl': '1.875rem',// 3 extra large
      'rm-4xl': '2.5rem',   // 4 extra large, 
      'rm-5xl': '3.5rem',   // 5 extra large, 
      'rm-6xl': '4.5rem',   // 6 extra large, 
      'rm-7xl': '5.5rem'    // 7 extra large, 
		},
		colors: {
			'black': '#000000',
			'white': '#fdfcf9',
			'transparent': 'transparent',
			'rm-main': '#1c1919',
			'rm-secondary': '#c08e41',
			'rm-error': '#d32f2f',
		},
		extend: {
      boxShadow: {
        'rm-ring-sm': '0 0 10px 3px var(--tw-shadow-color)',
        'rm-ring': '0 0 15px 5px var(--tw-shadow-color)',
        'rm-ring-lg': '0 0 20px 7px var(--tw-shadow-color)',
			},
		},
	},
	plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-luminous': {
        	textShadow: '0 0 10px rgba(192, 142, 65, 0.7), 0 0 20px rgba(192, 142, 65, 0.6), 0 0 30px rgba(192, 142, 65, 0.5)',
      	},
				'.scrollbar-gutter-stable': {
					scrollbarGutter: 'stable',
				},
      }, ['responsive', 'hover', 'focus-visible', 'focus', 'active', 'disabled']);
    }
  ],
};