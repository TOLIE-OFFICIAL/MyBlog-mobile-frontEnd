import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  // <div className={`p-${size}`}> //保证这样的写法生效
  safelist: 'p-3 p-4 p-5',
  // 前缀
  attributify: {
    prefix: "w:",
  },
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
})