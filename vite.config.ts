import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[folder]-[name]__[local]--[hash:base64:3]',
      scopeBehaviour: 'global',
    },
  },
})
