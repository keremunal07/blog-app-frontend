import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Create posts and share your thinks
        </span>
        <span className="headerTitleLg">Blog Suite</span>
      </div>
      <img
        className="headerImg"
        src="http://localhost:8000/images/header.png"
        alt=""
      />
      <div className="smoothScroll">
        <a href="#posts">
          <img
            src="http://localhost:8000/images/scroll.png"
            width={40}
            height={40}
            alt=""
          />
        </a>
        <span href="#posts">Posts</span>
      </div>
    </div>
  );
}
