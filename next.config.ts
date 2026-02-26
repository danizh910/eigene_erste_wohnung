import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      '6000-firebase-studio-1772025367177.cluster-lu4mup47g5gm4rtyvhzpwbfadi.cloudworkstations.dev',
      '9000-firebase-studio-1772025367177.cluster-lu4mup47g5gm4rtyvhzpwbfadi.cloudworkstations.dev',
      '*.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
