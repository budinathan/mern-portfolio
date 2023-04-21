import logo from "../assets/logo.png";

const Landing = () => {
  return (
    <main className="h-screen flex justify-between items-center">
      <div>
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="w-11 max-md:w-8 absolute top-10 max-sm:translate-x-[20px]"
          />
        </a>
      </div>
      <div className="flex flex-col gap-8 max-md:gap-6 max-sm:gap-4 text-right">
        <h1 className=" title text-8xl text-pinkColor max-md:text-5xl max-sm:text-3xl">
          Visual
          <br />
          Landing
          <br /> Studio
        </h1>
        <div className="flex gap-2 items-center justify-end">
          <i className="fa-solid fa-location-dot text-greenColor"></i>
          <h1 className="text text-greenColor text-lg max-md:text-base max-sm:text-sm">
            Jakarta, Indonesia
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Landing;
