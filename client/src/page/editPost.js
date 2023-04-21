import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../editor";
const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post/` + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
      });
    });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }
  return (
    <main className="px-24 py-6 flex flex-col max-sm:px-5 h-screen overflow-auto">
      <h1 className="title text-7xl max-md:text-5xl max-sm:text-3xl text-pinkColor">
        Update Post
      </h1>
      <form className="flex flex-col mt-10 gap-4 z-10" onSubmit={updatePost}>
        <input
          placeholder="Title.."
          type="title"
          className="border-solid border-[1px] rounded-sm p-1 text-sm bg-transparent border-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <Editor onChange={setContent} value={content} />
        <button className="mt-10 bg-orangeColor hover:bg-yellowColor  p-1 rounded shadow-md">
          Update
        </button>
      </form>
    </main>
  );
};

export default EditPost;
