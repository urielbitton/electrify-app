module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}
