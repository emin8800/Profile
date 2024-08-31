import react from '@vitejs/plugin-react';

export default {
  plugins: [react()], // React pluginini ekleyin
  server: {
    host: true, // Veya '0.0.0.0' olarak belirtin
    port: process.env.PORT || 3000,
    strictPort: true
  }
};
