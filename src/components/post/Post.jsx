import "./post.css";
import { Link } from "react-router-dom";
import { PF } from "../../helper/pathfile";
export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      <div className="postSubItem">
        <div className="postCategory">{post.categories[0]}</div>
        <div className="postAuthor">
          <span>
            Author: <b>{post.username}</b>
          </span>
        </div>
      </div>
    </div>
  );
}
