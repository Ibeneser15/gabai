import sec2 from "../components/img/sec2.png";

function sect2() {
  return (
    <div
      className="
      h-screen
      flex flex-row justify-around items-center mx-[15rem]
      max-md:flex-col
      max-md:mx-2
      "
    >
      <div className="flex justify-center items-center shrink-0">
        <img
          src={sec2}
          alt="law "
          className="flex-shrink-0 resize-none w-[300px] bg-cover"
        />
      </div>
      <div className="px-5 max-md:hidden">{/* Just to give them space*/}</div>
      <div className="p-0">
        <h1 className="text-6xl font-bold mb-4 max-md:text-center">
          About <span className="text-azure">GabAi</span>
        </h1>
        <br />
        <p
          className="text-justify text-2xl
        leading-loose
        max-md:text-center"
        >
          Welcome to GabAi, your go-to web application for comprehensive legal
          guides against workplace discrimination in the Philippines. Empower
          yourself with valuable insights into local laws, employee rights, and
          practical strategies for fostering a fair and inclusive workplace.
        </p>
      </div>
    </div>
  );
}

export default sect2;
