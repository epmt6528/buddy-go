import Header from '../components/Header'
import PostList from '../components/PostList'

export default function BuddyNews() {
  return (
    <div>
      <Header
        pictureName="blogHero"
        heading1="buddy"
        heading2="news"
        paragraph="Stay connected and don’t miss our latest updates"
      />
      <PostList />
    </div>
  )
}
