import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.easyfrontend.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });
    return config;
  }
};

export default withVideos(nextConfig); 