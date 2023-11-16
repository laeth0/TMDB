/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'dist',   =>   // Optional: Change the output directory `out` -> `dist`
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
