import { posts } from '../../../data'

export default function handler(req, res) {
  console.log('API is called!')
  console.log(posts)
  console.log(res.json(posts))
  res.status(200).json(posts)
}
