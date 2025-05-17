module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#000000',         /* Pure black for background */
        secondary: '#d4af37',       /* Gold for accents */
        tertiary: '#0f0f0f',        /* Slightly lighter black for cards */
        'black-100': '#0a0a0a',     /* Dark gray for sections */
        'black-200': '#050505',     /* Very dark gray */
        'gold-100': '#f5d76e',      /* Lighter gold */
        'gold-200': '#b8860b',      /* Darker gold */
        'white-100': '#f5f5f5',     /* Off-white */
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
