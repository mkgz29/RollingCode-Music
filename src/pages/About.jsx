import Navbar from "../components/Navbar";
import Cardabout from "../components/Cardabout";

function About() {
  const cardsInfo = [
    {
      id: 1,
      title: "Miguel Ramon Gomez",
      text: "",
      img: "about1",
    },
    {
      id: 2,
      title: "Benjamin Osias Valverdi",
      text: "",
      img: "about2",
    },
    {
      id: 3,
      title: "Facundo Solano",
      text: "",
      img: "about3",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-dark text-light">
        <section className="container py-5 text-center">
          <h1 className="fw-bold display-5">¿Que es RollingCode Music?</h1>
          <p className="mt-3">
            Es una aplicación web de música desarrollada como proyecto de
            aprendizaje en React.
          </p>
        </section>

        <section className="container py-4">
          <h2 className="text-center mb-4">El proyecto</h2>
          <p>
            RollingCode Music es una plataforma que permite reproducir música,
            explorar tus canciones favoritas y escucharlas cuando quieras.
          </p>
        </section>

        <section className="container py-4">
          <h2 className="text-center mb-4">El equipo</h2>
          <div className="row g-4">
            <Cardabout cards={cardsInfo} />
          </div>
        </section>

        <section className="container py-5">
          <h2 className="text-center mb-4">Tecnologías utilizadas</h2>
          <div className="row justify-content-center g-3">
            {[
              "React",
              "React Router",
              "Vite",
              "JavaScript",
              "CSS",
              "Git & GitHub",
            ].map((tech) => (
              <div key={tech} className="col-6 col-md-4 col-lg-2">
                <div className="bg-secondary bg-opacity-10 text-center py-2 rounded">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
export default About;
