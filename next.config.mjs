/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'logodownload.org',
      },
      {
        protocol: 'https',
        hostname: 'www.omint.com.br',
      },
      {
        protocol: 'https',
        hostname: 'samisaude.com.br',
      },
    ],
  },
};

export default nextConfig;