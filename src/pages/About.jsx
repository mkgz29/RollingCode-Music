import Navbar from "../components/Navbar";
import Cardabout from "../components/Cardabout";

function About() {
  const cardsInfo = [
    {
      id: 1,
      title: "Miguel Ramon Gomez",
      text: "opinion del proyecto",
      img: "about1",
    },
    {
      id: 2,
      title: "Benjamin Osias Valverdi",
      text: "opinion del proyecto",
      img: "about2",
    },
    {
      id: 3,
      title: "Facundo Solano",
      text: "opinion del proyecto",
      img: "about3",
    },
  ];

  return (
    <div>
      <Navbar />
      <h1>Nosotros</h1>
      <Cardabout cards={cardsInfo} />
      <p>Esta es la página About de mi web de música</p>
    </div>
  );
}

export default About;
