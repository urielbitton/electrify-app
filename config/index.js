const dev = process.env.NODE_ENV  !== "production"

export const server = dev ? 'http://localhost:3000' : 'https://electrify-app-pmo4yckvv-urielbitton.vercel.app' 