import Link from "next/link";

const Header = () => {
  return (
    <div className="border-solid border-4 border-lime-500 flex flex-row font-bold justify-between h-24">
      <h1 className="text-4xl flex items-center p-8">Braifz</h1>
      <Link
        className="border-solid border-l-4 border-lime-500 w-32 text-xl font-bold flex items-center justify-center hover:bg-lime-500 hover:text-black"
        target="_blank"
        href="https://braifz.hashnode.dev/"
      >
        Blog
      </Link>
    </div>
  );
};

export default Header;
