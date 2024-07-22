import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const scrollToSection = (hash) => {
    router.push(hash, undefined, { shallow: true });
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            Tsouri Chahine
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <button
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={() => scrollToSection("/#about")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </button>
          </li>
          <li>
            <button
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={() => scrollToSection("/#experience")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </button>
          </li>
          <li>
            <button
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={() => scrollToSection("/#skills")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </button>
          </li>
          <li>
            <button
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={() => scrollToSection("/#education")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </button>
          </li>
          <li>
            <button
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={() => scrollToSection("/#projects")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
