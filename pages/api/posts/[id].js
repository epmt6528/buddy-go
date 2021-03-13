import { posts } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = posts.filter((post) => post.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `The post does not exist` })
  }
}
