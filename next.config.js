/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    reactStrictMode:true,
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
