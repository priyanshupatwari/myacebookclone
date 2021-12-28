// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This runs in the backend, same as node server (functions as a service)

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
