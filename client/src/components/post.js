import { format } from "date-fns";
import { Link } from "react-router-dom";
const Post = ({ _id, title, cover, createdAt }) => {
  return (
    <main className="w-full  mb-5 h-[200px] flex relative">
      <section className="flex overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out">
        <Link to={`/post/${_id}`}>
          <img
            src={`${process.env.REACT_APP_API_URL}/` + cover}
            alt="cover"
            className="object-cover object-center w-[100%] h-[100%] grayscale-[80%]"
          />
        </Link>
      </section>
      <section className="flex flex-col gap-2 max-sm:gap-1 absolute top-6 left-10">
        <h1 className="subtext text-xl max-sm:text-lg">{title}</h1>
        <div className="flex gap-2 subtext text-sm max-sm:text-xs items-center">
          <span>author</span>
          {createdAt && (
            <time className="text text-xs">
              {format(new Date(createdAt), "yyyy-MM-dd")}
            </time>
          )}
        </div>
      </section>
    </main>
  );
};

export default Post;
