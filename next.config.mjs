/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'tailwindui.com',
            'flowbite.s3.amazonaws.com',
            'assets.aceternity.com',
            'images.unsplash.com',
            'pbs.twimg.com',
            'utfs.io',
            'i.ibb.co',  // Add this line to allow images from i.ibb.co
        ],
    },
};

export default nextConfig;
