const dev = process.env.NODE_ENV !== 'production'

// export const server = dev ? 'http://localhost:3000' : 'http://localhost:3000'
// export const server = dev
//   ? 'http://localhost:3000'
//   : 'https://next-js-buddy-go-b2j0szxwu-epmt6528.vercel.app'
export const server = dev
  ? 'https://next-js-buddy-go-b2j0szxwu-epmt6528.vercel.app'
  : 'https://next-js-buddy-go-b2j0szxwu-epmt6528.vercel.app'
