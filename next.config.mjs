/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<backend-master>',
    assetPrefix: isDev ? '' : '/<backend-master>',
};

export default nextConfig;