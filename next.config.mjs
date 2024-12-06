/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                pathname: '/**', // Разрешаем любые пути
            },
        ],
    },
};

export default nextConfig;
