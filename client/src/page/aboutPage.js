import Footer from "../components/footer";
import logo from "../assets/logo.png";
import profile from "../assets/profilepict.jpeg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <main className="md:h-screen px-24 py-6 flex flex-col max-sm:px-5">
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
            About
          </h1>
        </section>
        <section className="mt-3">
          <div className="flex justify-center items-center">
            <img src={profile} alt="me" className="object-cover" />
          </div>
          <p className="subtext text-base mt-3 max-sm:text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            faucibus risus vitae orci malesuada mollis. Donec at pulvinar
            tellus. Etiam nibh ligula, semper eu congue id, vehicula sodales
            nisl. Nulla facilisi. Aenean eget luctus sem. Duis ornare viverra
            quam, a mollis diam viverra ut. In porta tincidunt erat vel egestas.
            Ut sed justo a nulla mattis mollis at et nibh. Mauris aliquet nisi
            sit amet dui malesuada, ac tristique metus rutrum. Nullam ut tortor
            ac lacus malesuada dignissim. Proin pellentesque, lectus id
            vestibulum blandit, augue risus pretium tortor, quis egestas quam
            odio sit amet sem. Proin eu neque nulla. Morbi sit amet nulla metus.
            Duis maximus libero ut sem aliquet, eu convallis nisl scelerisque.
            Curabitur tempus felis sed interdum condimentum. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quis quam sapien.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
