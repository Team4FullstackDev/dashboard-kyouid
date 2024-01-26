/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: 'Montserrat',
			},
			container: {
				center: true,
			},
			colors: {
				'mod-color-orange-100': '#FC4C02',
				'mod-color-bg': '#F7F7F7',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
