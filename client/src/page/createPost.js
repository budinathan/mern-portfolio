import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok === true) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to="/blog" />;
  }
  return (
    <main className="px-24 py-6 flex flex-col max-sm:px-5 h-screen overflow-auto">
      <h1 className="title text-7xl max-md:text-5xl max-sm:text-3xl text-pinkColor">
        Create new blog
      </h1>
      <form className="flex flex-col mt-10 gap-4 z-10" onSubmit={createNewPost}>
        <input
          placeholder="Title.."
          type="title"
          className="border-solid border-[1px] rounded-sm p-1 text-sm bg-transparent border-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <ReactQuill
          value={content}
          modules={modules}
          onChange={(newValue) => setContent(newValue)}
        />
        <button className="mt-10 bg-orangeColor hover:bg-yellowColor  p-1 rounded shadow-md">
          Create Post
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
