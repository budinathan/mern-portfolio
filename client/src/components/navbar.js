import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  });

  function Logout() {
    fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo("");
  }

  const username = userInfo?.username;
  return (
    <nav>
      <button
        type="button"
        onClick={() => setNav(!nav)}
        className=" absolute flex items-center h-screen max-sm:right-0 max-sm:items-start max-sm:pt-11 mr-3 z-50"
      >
        <h1
          className={`${
            nav ? "text-white" : "text-greenColor"
          } tracking-wider text-base max-sm:text-sm`}
          style={{ textOrientation: "upright", writingMode: "vertical-rl" }}
        >
          {nav ? "Close" : "Menu"}
        </h1>
      </button>

      <main
        className={`${
          nav ? "opacity-100 z-40" : "opacity-0"
        } h-screen bg-pinkColor/70 backdrop-opacity-30 w-screen fixed left-0 flex items-center justify-center transition-all duration-500 ease-in-out  px-12 mx-auto max-md:px-4`}
      >
        <div className="flex gap-40 max-sm:flex-col max-sm:gap-5">
          <section className="flex flex-col text text-3xl max-md:text-xl ">
            {!username && (
              <>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
              </>
            )}
            {username && (
              <>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/create">Add Blog</Link>
                <button onClick={Logout} className="text-start">
                  Logout
                </button>
              </>
            )}
          </section>
          <section className="flex flex-col gap-2 max-sm:gap-1">
            <h1 className="text text-lg">Contact</h1>
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="subtext text-base max-sm:text-sm">+62 023131321</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-instagram"></i>
              <p className="subtext text-base max-sm:text-sm">instagram</p>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:melinda@gmail.com">
                <i className="fa-regular fa-envelope"></i>
              </a>
              <p className="subtext text-base max-sm:text-sm">
                email@gmail.com
              </p>
            </div>
          </section>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
