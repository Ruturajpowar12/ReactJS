function Home() {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="left w-1/2 p-3 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuq3fCymzXHbALlp91txvWAFQl9kxw5EKDiQio3VsRA&s=10"
          alt="logo"
          className=" mt-25 w-md"
        />
      </div>
      <div className="right w-1/2 p-3 flex justify-center items-center ">
        <div className="">
          <h1 className="text-7xl font-extrabold mb-3 text-blue-600">
            Click SHOP
          </h1>
          <h2 className="text-3xl font-semibold text-blue-800 mb-7 mr-2">
            It is Online Shopping Website.
          </h2>
          <p className="text-gray-800 font-light text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptas quisquam magnam distinctio sint iure libero maiores.
            Doloribus laboriosam quam repellat, in placeat, expedita ullam at
            qui nulla, a corporis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
