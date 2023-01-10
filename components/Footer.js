import Link from "next/link";
import Image from "next/image";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="border-solid border-4 border-lime-500 flex flex-row font-bold justify-between h-24 mt-8">
      <Link
        className="border-solid border-r-4 border-lime-500 w-32 flex items-center justify-center hover:bg-lime-500"
        target="_blank"
        href="https://www.linkedin.com/in/braian-f-ba90291a8/"
      >
        <Image
          className="invert hover:invert-0"
          src={linkedin}
          alt="github icon"
          width={50}
        />
      </Link>
      <Link
        className="border-solid border-r-4 border-l-4 border-lime-500 w-32 flex items-center justify-center hover:bg-lime-500 "
        target="_blank"
        href="https://github.com/Braifz"
      >
        <Image
          className="invert hover:invert-0"
          src={github}
          alt="github icon"
          width={50}
        />
      </Link>
      <Link
        className="border-solid border-l-4 border-lime-500 w-32 flex items-center justify-center hover:bg-lime-500"
        target="_blank"
        href="https://twitter.com/braifz"
      >
        <Image
          className="invert hover:invert-0"
          src={twitter}
          alt="github icon"
          width={50}
        />
      </Link>
    </div>
  );
};

export default Footer;
