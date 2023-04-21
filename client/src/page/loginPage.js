import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";
const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  }
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <main className="h-screen py-6 flex items-center justify-center max-w-7xl px-12 mx-auto max-md:px-4">
      <section className="flex flex-col gap-5 justify-center items-center bg-pinkColor p-16 max-sm:p-10 shadow-md rounded-md">
        <h1 className="title text-3xl">Login</h1>
        <form className="flex flex-col gap-5 z-10" onSubmit={login}>
          <input
            placeholder="Username.."
            className="py-2 text-sm bg-transparent border-b-[1px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password.."
            className="py-2 text-sm bg-transparent border-b-[1px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button className="bg-orangeColor  hover:bg-yellowColor transition-all duration-200 ease-in-out p-1 rounded shadow-md">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Loginpage;
