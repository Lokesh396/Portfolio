import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Deployed as a project page: https://lokesh396.github.io/Portfolio/
  // Keeping the base here means every emitted asset URL carries the repo
  // prefix, so a build served from that sub-path resolves correctly.
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
