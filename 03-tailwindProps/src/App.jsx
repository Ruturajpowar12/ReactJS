import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./pages/Card";

function App() {
  const heroes = [
    {
      name: "IronMan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPfFM2imbVEXVdRnznzIICX5St0k_bwgIzVxnNe4EuA&s=10",
      desc: "Iron Man is a 2008 American superhero film based on the Marvel Comics character Iron Man.",
    },
    {
      name: "Thor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2X5-O2sW2dY4v3E8m0g_K5sW0aY3S_v0L_g&s=10",
      desc: "Thor is the Asgardian God of Thunder, wielding the enchanted hammer Mjolnir to protect Earth and Asgard.",
    },
    {
      name: "Captain America",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8v4gX5W_3O2j2E1d7K2Y1S0v_3m0L5sW0aY&s=10",
      desc: "Steve Rogers is a World War II veteran enhanced to the peak of human physically by an experimental serum.",
    },
    {
      name: "SpiderMan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X0m1A2b3C4d5E6f7G8h9I0j1K2l3M4n5O6&s=10",
      desc: "Peter Parker gained spider-like abilities after being bitten by a radioactive spider and fights crime in NYC.",
    },
    {
      name: "Black Widow",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1a2b3C4d5E6f7G8h9I0j1K2l3M4n5O6p7Q8&s=10",
      desc: "Natasha Romanoff is a highly trained master spy, martial artist, and former KGB assassin turned Avenger.",
    },
    {
      name: "Hulk",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcU1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8&s=10",
      desc: "Dr. Bruce Banner transforms into a powerful green giant whenever subjected to extreme emotional stress or anger.",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {heroes.map((hero, index) => (
          <Card key={index} name={hero.name} img={hero.img} desc={hero.desc} />
        ))}
      </div>
    </>
  );
}

export default App;
