import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://olgasolo.github.io/trainer-s-portfolio/",
  plugins: [react()],
})
