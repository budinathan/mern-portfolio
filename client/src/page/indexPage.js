import Post from "../components/post";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
const Indexpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <main className="px-24 py-6 flex flex-col max-sm:px-5">
        <section>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-11 max-md:w-8 absolute top-10"
            />
          </Link>
        </section>
        <section className="mt-20">
          <h1 className="title text-7xl max-md:text-5xl max-sm:text-3xl text-pinkColor">
            Blog
          </h1>
          <p className="subtext text-base mt-3 max-sm:text-sm">
            Welcome to my blog, where I write my journey.
          </p>
        </section>
        <section
          className={`${posts.length <= 3 ? "h-screen" : "h-full"} mt-5`}
        >
          {posts.length > 0 && posts.map((post) => <Post {...post} />)}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Indexpage;
