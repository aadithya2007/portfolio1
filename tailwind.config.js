/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFFF',
        mist: '#E5E5E5',
        gold: '#FCA311',
        navy: '#14213D',
        obsidian: '#000000'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        gold: '0 0 40px rgba(252, 163, 17, 0.18)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at center, rgba(252, 163, 17, 0.22), transparent 45%)'
      }
    }
  },
  plugins: []
}
