import { useEffect, useState, useContext } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../userContext";
const PostPage = () => {
  const [postInfo, setPostInfo] = useState("");
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  });
  if (!postInfo) return "";

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    // Handle successful deletion here

    if (response.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/blog"} />;
  }

  return (
    <main className="px-8 py-6 max-sm:px-6 h-screen">
      <section className="flex justify-between items-center">
        <div className="z-10">
          <Link to="/blog" className="flex gap-2 items-center ">
            <i className="fa-solid fa-chevron-left"></i>
            <span className="text-sm max-sm:text-xs">Back</span>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          {userInfo.id === postInfo.author._id && (
            <div className="bg-orangeColor  hover:bg-yellowColor transition-all duration-200 ease-in-out p-1 rounded-md z-10">
              <Link
                to={`/edit/${postInfo._id}`}
                className="flex items-center gap-2 text-sm max-sm:text-xs"
              >
                <i className="fa-regular fa-pen-to-square"></i>
                <span>Edit</span>
              </Link>
            </div>
          )}
        </div>
      </section>
      <section className=" flex items-center justify-center mt-5">
        <img
          src={`${process.env.REACT_APP_API_URL}/${postInfo.cover}`}
          alt="content"
          className=" object-cover w-full h-[300px] rounded-md shadow-md grayscale-[80%]"
        />
      </section>
      <section className="mt-5">
        <h1 className="title text-5xl text-pinkColor max-sm:text-3xl">
          {postInfo.title}
        </h1>
        <div className="subtext text-xs flex gap-3 mt-2">
          <span>Written by, Author</span>
          <time>{format(new Date(postInfo.createdAt), "yyyy-MM-dd")}</time>
        </div>
        <div
          className="mt-2 text-justify subtext text-base max-sm:text-sm"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        ></div>
      </section>
      {userInfo.id === postInfo.author._id && (
        <section className="z-20 relative">
          <h1 className="title text-2xl text-orangeColor mb-2">DANGER ZONE</h1>
          <button
            onClick={handleDelete}
            className="bg-orangeColor  hover:bg-yellowColor transition-all duration-200 ease-in-out p-1 rounded-md z-10 flex items-center gap-2 text-sm max-sm:text-xs"
          >
            <i className="fa-solid fa-trash"></i>
            <span>Delete</span>
          </button>
        </section>
      )}
    </main>
  );
};

export default PostPage;
