import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Eğer repo adın tunahancoban.github.io ise base: '/' yap
// Eğer repo adın portfolio gibi alt repo ise base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
