import Link from "next/link";

const PresentationCard = () => {
  return (
    <div className="border-solid border-4 border-lime-500 flex flex-col font-bold justify-between mt-8 p-8 text-center">
      <h2 className="text-3xl pb-8 ">Hi there 👋</h2>
      <h1 className="text-4xl p-8 ">I'm Braian a Frontend developer web3</h1>
      <p className="p-8">
        I'm having fun learning and making stuff with Javascript, I like doing
        acrobatics, read about non-fiction and enjoy time in nature 😄🌱
      </p>
      <p className="pb-8">
        Actually I’m learning about solidity, blockchain and web3 techs 🦾
      </p>
    </div>
  );
};

export default PresentationCard;
