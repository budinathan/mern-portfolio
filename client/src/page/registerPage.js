import { useState } from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function Register(ev) {
    ev.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  }
  return (
    <main className="h-screen py-6 flex items-center justify-center max-w-7xl px-12 mx-auto max-md:px-4">
      <section className="flex flex-col gap-5 justify-center items-center bg-pinkColor p-16 max-sm:p-10 shadow-md rounded-md ">
        <h1 className="title text-3xl">Register</h1>
        <form className="flex flex-col gap-5 z-10" onSubmit={Register}>
          <input
            placeholder="Username.."
            className="py-2 text-sm bg-transparent border-b-[1px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password.."
            className="py-2 text-sm bg-transparent border-b-[1px]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-orangeColor hover:bg-yellowColor p-1 rounded shadow-md">
            Register
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
