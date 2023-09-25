import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        "scale-out-center": "scale-out-center 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards",
        "scale-in-center": "scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards",
      },
      keyframes:{
        "scale-out-center": {
          "0%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "100%": {
            opacity: "0",
            transform: "scale(0)"
          }
        },
        "scale-in-center": {
          "0%": {
            opacity: "0",
            transform: "scale(0)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
      }
    },
  },
  plugins: [],
}
export default config
