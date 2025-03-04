import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: false
  },
  plugins: [react()],
  base: '/my-portfolio/',
  mode: 'production',
})
