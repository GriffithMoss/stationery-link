/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com' ,  'c.imgz.jp' , 'google.com', 'data:image','www.alotmall.com', 'm.media-amazon.com'
      // Add more domains here if needed
    ],
  },
};

module.exports = nextConfig;
