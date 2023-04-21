import Landing from "./landingPage/landing";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./page/loginPage";
import Register from "./page/registerPage";
import Indexpage from "./page/indexPage";

import Layout from "./layout/layout";
import { UserContextProvider } from "./userContext";
import CreatePost from "./page/createPost";
import PostPage from "./page/postPage";
import EditPost from "./page/editPost";
import AboutPage from "./page/aboutPage";

function App() {
  return (
    <main className="bg-gray-900">
      <section className="max-w-7xl px-14 mx-auto max-md:px-4 text-gray-100">
        <UserContextProvider>
          <Routes>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
              <Route path="/blog" element={<Indexpage />} />
              <Route path="/" element={<Landing />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </section>
    </main>
  );
}

export default App;
