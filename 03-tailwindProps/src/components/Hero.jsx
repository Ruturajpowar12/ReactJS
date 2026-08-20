function Hero() {
  return (
    <div className="h-[650px] w-full flex bg-gray-100 top-10">
      <div className="left w-full flex flex-col pl-10 pt-25">
        <h1 className="text-5xl font-bold text-red-500 mb-5">
          This Is Marvel Site!
        </h1>
        <h3 className="text-3xl font-semibold text-red-600 mb-8">
          Marvel Cinematic Universe (MCU){" "}
        </h3>
        <p className="flex-wrap text-xl font-semibold text-red-800 mb-10">
          The Marvel Cinematic Universe (MCU) is an American media franchise and
          shared universe centered on a series of superhero films produced by
          Marvel Studios, based on characters from American comic books
          published by Marvel Comics.
        </p>
        <button className="h-10 text-xl text-white w-2/4 font-semibold rounded shadow-2xl  bg-red-900 w-1">
          <a href="https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe">
            Go to Marvel
          </a>
        </button>
      </div>
      <div className="right w-full">
        <div className="card  flex   flex-col  justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPfFM2imbVEXVdRnznzIICX5St0k_bwgIzVxnNe4EuA&s=10"
            alt="ironMan"
            className="h-80  w-80
           rounded-3xl  mt-10 mb-6"
          />
          <h2 className="font-semibold mb-4 text-3xl text-red-500">
            Robert Downey Jr.
          </h2>
          <p className=" mx-7 text-lg ">
            Iron Man is a 2008 American superhero film based on the Marvel
            Comics character Iron Man. Produced by Marvel Studios and
            distributed by Paramount Pictures,[a] it is the first film in the
            Marvel Cinematic Universe (MCU).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
