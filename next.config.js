/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // Add or Change domains here to add allowed websites for images
  // ↓

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "i.imgur.com",
      "ouch-cdn2.icons8.com",
    ],
  },
}
