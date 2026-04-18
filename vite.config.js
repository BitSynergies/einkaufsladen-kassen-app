import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['products.json', 'sounds/**'],
      manifest: {
        name: 'Einkaufsladen Kassen-App',
        short_name: 'Kasse',
        description: 'Kindgerechte Kassen-App für den Einkaufsladen',
        theme_color: '#5B8C5A',
        background_color: '#FFF8F0',
        display: 'standalone',
        orientation: 'landscape',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,mp3,webp}']
      }
    })
  ]
})
