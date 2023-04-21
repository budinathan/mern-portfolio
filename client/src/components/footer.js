import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <main className="px-5 py-6 flex flex-col">
      <div className="h-[1px] w-full bg-pinkColor"></div>
      <section className="mt-3">
        <h1 className="text-xs text-center items-center justify-center">
          Thank you for taking the time to visit my website. Don't forget to
          follow me on social media to stay up-to-date on my latest projects and
          endeavors.
        </h1>
      </section>
      <section className="flex gap-7 subtext opacity-50 items-center justify-center mt-4 pb-8">
        <Link className=" transition ease-in-out duration-200 scale-100 hover:scale-105">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
        <a className=" transition ease-in-out duration-200 scale-100 hover:scale-105">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <Link className=" transition ease-in-out duration-200 scale-100 hover:scale-105">
          <i className="fa-brands fa-instagram"></i>
        </Link>

        <Link className=" transition ease-in-out duration-200 scale-100 hover:scale-105">
          <i className="fa-brands fa-github"></i>
        </Link>

        <Link className=" transition ease-in-out duration-200 scale-100 hover:scale-105">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </section>
    </main>
  );
};

export default Footer;
