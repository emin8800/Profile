// vite.config.js
export default {
  server: {
    host: true, // Veya '0.0.0.0' olarak belirtin
    port: process.env.PORT || 3000,
    strictPort: true
  }
};
