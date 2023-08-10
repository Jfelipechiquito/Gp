/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        }
    },
    reactStrictMode: true,
    optimizeFonts: true,
    images: {
        deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
        domains: ['res.cloudinary.com'],
        loader: 'akamai',
        path: '/',
    },
};

module.exports = nextConfig;
