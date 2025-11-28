module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        neon: {
          '0%, 100%': {
            boxShadow: '0 0 6px #dbeafe, 0 0 12px #fbcfe8',
          },
          '50%': {
            boxShadow: '0 0 18px #dbeafe, 0 0 28px #fbcfe8',
          },
        },
      },
      animation: {
        neon: 'neon 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
