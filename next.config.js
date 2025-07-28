/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  generateStaticParams: true,
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
