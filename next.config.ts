import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
<<<<<<< HEAD
=======
  /* config options here */
>>>>>>> f4ab376a1a37e2f75b2f9e733ca4c8f1c3812a34
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
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
};

export default nextConfig;
