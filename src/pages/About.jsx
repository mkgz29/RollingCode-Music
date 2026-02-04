import Navbar from "../components/Navbar";
import Cardabout from "../components/Cardabout";
import Faq from "../components/Faq";
import questions from "../data/questions";

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

      <main className="bg-black text-light min-vh-100 pt-5 main-content">
        <section className="container py-5 text-center">
          <h1 className="fw-bold display-5">¿Que es RollingCode Music?</h1>
          <p className="mt-3">
            RollingCode Music es una aplicación web de música creada con React,
            pensada para practicar el desarrollo de interfaces interactivas y
            una experiencia de usuario inspirada en plataformas de streaming
            actuales.
          </p>
        </section>

        <section className="container py-4">
          <h2 className="text-center mb-4">El proyecto</h2>
          <p>
            El proyecto simula una plataforma de streaming musical donde los
            usuarios pueden explorar contenido, conocer distintos planes de
            suscripción y navegar por una experiencia similar a aplicaciones
            reales del mercado, aplicando buenas prácticas de desarrollo
            frontend.
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
                <div className="bg-danger bg-opacity-75 text-light text-center py-2 rounded fw-semibold">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-dark py-5">
          <Faq items={questions} />
        </section>
      </main>
    </>
  );
}
export default About;
