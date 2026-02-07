import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // <- importa path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <- agrega este alias
    },
  },
})