import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/Site-Emos-Nao-Morreram',
  plugins: [react(), svgr()],
})