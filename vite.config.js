// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path"

// // https://vite.dev/config/

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

// // export default defineConfig({
// //   plugins: [react()],
  
// // })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// Import tailwindcss properly
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})