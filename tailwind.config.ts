import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        svn: ['var(--font-svn)'],
      },
      colors: {
        cyan: "#00B7F0",
        sea: "#001730",
        light: "#FEE7B5",
        pink: "#FF8181",
        gray: "#909090"
      }
    },
  },
  plugins: [],
} satisfies Config;
