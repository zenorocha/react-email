/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/n2pWEjjNnD',
        permanent: true,
      },
    ];
  },
};
