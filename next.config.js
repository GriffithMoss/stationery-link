/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com' ,  'c.imgz.jp' , 'google.com', 'data:image','www.alotmall.com', 'm.media-amazon.com', 'www.nichima.co.jp','c.imgz.jp', 'www.nichima.co.jp', 'www.alotmall.com', 'www.google.com', 'www.amazon.co.jp', 'www.amazon.com', 'www.amazon.co.uk', 'www.amazon.de', 'www.amazon.fr', 'www.amazon.it', 'www.amazon.es', 'www.amazon.ca', 'www.amazon.in', 'www.amazon.com.br', 'www.amazon.com.mx', 'www.amazon.com.au', 'www.amazon.co.jp','www.alotmall.com', 'www.nichima.co.jp', 'c.imgz.jp', 'www.google.com', 'www.amazon.co.jp', 'www.amazon.com', 'www.amazon.co.uk', 'www.amazon.de', 'www.amazon.fr', 'www.amazon.it', 'www.amazon.es', 'www.amazon.ca', 'www.amazon.in', 'www.amazon.com.br', 'www.amazon.com.mx', 'www.amazon.com.au','m.media-amazon.com',
      'encrypted-tbn3.gstatic.com','item.shachihata.co.jp','www.ikea.com','www.forest.co.jp','jp.images-monotaro.com',
      'tshop.r10s.jp','www.shop-stationery.com','cdn.askul.co.jp','jp.images-monotaro.com','m.media-amazon.com','cdn.askul.co.jp',
      'm.media-amazon.com','www.craypas.co.jp','www.hansoku-style.jp','jp.images-monotaro.com','www.lihit-lab.com','tshop.r10s.jp',
      'www.kokuyo-shop.jp','c.p02.c4a.im','www.yamato.co.jp','image1.shopserve.jp','www.tombow.com',
      // Add more domains here if needed
    ],
  },
};

module.exports = nextConfig;
