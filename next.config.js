/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/valorant_analysis',
        destination: '/valorant_analysis.html',
        permanent: true,
      },
    ]
  },
}
