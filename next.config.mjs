/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // Disable built-in image optimization
    },
    trailingSlash: true
};

export default nextConfig;
