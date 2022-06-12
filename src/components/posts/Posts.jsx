import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div id="posts" className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
