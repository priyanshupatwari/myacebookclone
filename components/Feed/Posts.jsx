import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../../firebase'
import Post from './Post';
const Posts = () => {
  const [realTimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  console.log(`c`, realTimePosts);
  return (
    <div className="space-y-2">
      {realTimePosts?.docs.map((post) => {
        const { name, message, email, timestamp, image, postImage } = post.data();
        return (
          <Post
            key={post.id}
            name={name}
            message={message}
            timestamp={timestamp}
            image={image}
            postImage={postImage}
          />
        )
      })
      }
    </div>
  )
}

export default Posts
/*The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of
connected objects without having to
check that each reference in the chain is valid.

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish
(null or undefined), the expression short-circuits with a return value of undefined.
 When used with function calls, it returns undefined if the given function does not exist.*/