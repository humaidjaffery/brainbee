/** @type {import('next').NextConfig} */
const nextConfig = {
  // Moved from experimental.serverComponentsExternalPackages to serverExternalPackages
  serverExternalPackages: [],
  // Force webpack for consistent behavior with React 19
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
    }
    return config;
  },
};

export default nextConfig;
