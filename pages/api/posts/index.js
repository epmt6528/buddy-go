import { posts } from '../../../data'

export default function handler(req, res) {
  console.log('API is called!')

  res.status(200).json(posts)
}
