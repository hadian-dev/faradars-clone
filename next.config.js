/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa',
  },
  images: {
    domains: ['faradars.org'],
  },
}

module.exports = nextConfig
