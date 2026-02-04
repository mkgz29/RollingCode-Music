import Navbar from "../components/Navbar";
import Cardabout from "../components/Cardabout";
import Faq from "../components/Faq";
import questions from "../data/questions";
import { motion } from "framer-motion";
import logo from "../assets/img/logonavbar.png";
import { useState } from "react";

function About() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "What is RollingCode Music?",
      description: "A music streaming platform developed by RollingCode School students, combining modern web development technologies with an interface inspired by the best user experiences on the market. A real project that demonstrates skills in React, responsive design, and advanced frontend development.",
      projectTitle: "The Project",
      projectDescription: "RollingCode Music is more than an academic project: it's a functional application that replicates the experience of platforms like Spotify or Apple Music. Users can search for artists and songs through the iTunes API, play audio, and discover content intuitively. The project incorporates user authentication, smooth navigation with React Router, animations with Framer Motion, and a fully responsive design optimized for mobile and desktop devices. All developed following best practices of clean code, componentization, and state management.",
      teamTitle: "The Team",
      techTitle: "Technologies Used",
      miguel: {
        role: "Scrum Master & Frontend Developer",
        text: "Led the organization and initial architecture of the project by applying agile methodologies and coordinating the team's workflow. He was responsible for API integration, development of the Detail page with player, the CRUD system of the Admin panel, and key components such as SearchForm and main navigation, ensuring technical and functional coherence within the application."
      },
      benjamin: {
        role: "Frontend Developer",
        text: "In charge of developing the About page, implementing the 404 screen and the membership system, providing visual structure and coherence within the user experience. He actively participated in QA testing tasks, error review and functional adjustments during the project integration, collaborating in the general stability of the application and in the continuous improvement of the interface."
      },
      facundo: {
        role: "Frontend Developer",
        text: "Responsible for the application's authentication system, including Login, Registration and form validations. He implemented the structural base of the pages related to user access and worked on the logic of roles and permissions within the navigation flow. His contribution was key to establishing a secure, orderly and functional experience in user management."
      }
    },
    es: {
      title: "¿Qué es RollingCode Music?",
      description: "Una plataforma de streaming musical desarrollada por estudiantes de RollingCode School, que combina tecnologías modernas de desarrollo web con una interfaz inspirada en las mejores experiencias de usuario del mercado. Un proyecto real que demuestra habilidades en React, diseño responsivo y desarrollo frontend avanzado.",
      projectTitle: "El proyecto",
      projectDescription: "RollingCode Music es más que un proyecto académico: es una aplicación funcional que replica la experiencia de plataformas como Spotify o Apple Music. Los usuarios pueden buscar artistas y canciones mediante la API de iTunes, reproducir audio y descubrir contenido de forma intuitiva. El proyecto incorpora autenticación de usuarios, navegación fluida con React Router, animaciones con Framer Motion, y un diseño completamente responsive optimizado para dispositivos móviles y desktop. Todo desarrollado siguiendo las mejores prácticas de código limpio, componentización y gestión de estado.",
      teamTitle: "El equipo",
      techTitle: "Tecnologías utilizadas",
      miguel: {
        role: "Scrum Master & Desarrollador Frontend",
        text: "Lideró la organización y arquitectura inicial del proyecto aplicando metodologías ágiles y coordinando el flujo de trabajo del equipo. Fue responsable de la integración de APIs, el desarrollo de la página Detail con reproductor, el sistema CRUD del panel Admin y componentes clave como SearchForm y la navegación principal, asegurando coherencia técnica y funcional dentro de la aplicación."
      },
      benjamin: {
        role: "Desarrollador Frontend",
        text: "Encargado del desarrollo de la página About, la implementación de la pantalla 404 y el sistema de membresías, aportando estructura visual y coherencia dentro de la experiencia del usuario. Participó activamente en tareas de QA testing, revisión de errores y ajustes funcionales durante la integración del proyecto, colaborando en la estabilidad general de la aplicación y en la mejora continua de la interfaz."
      },
      facundo: {
        role: "Desarrollador Frontend",
        text: "Responsable del sistema de autenticación de la aplicación, incluyendo Login, Registro y validaciones de formularios. Implementó la base estructural de las páginas relacionadas al acceso de usuarios y trabajó en la lógica de roles y permisos dentro del flujo de navegación. Su aporte fue clave para establecer una experiencia segura, ordenada y funcional en la gestión de usuarios."
      }
    }
  };

  const t = translations[language];

  const cardsInfo = [
    {
      id: 1,
      title: "Miguel Ramon Gomez",
      role: t.miguel.role,
      text: t.miguel.text,
      img: "about1",
      skills: ["React", "Scrum", "APIs", "CRUD"]
    },
    {
      id: 2,
      title: "Benjamin Osias Valverdi",
      role: t.benjamin.role,
      text: t.benjamin.text,
      img: "about2",
      skills: ["React", "UI/UX", "QA", "Testing"]
    },
    {
      id: 3,
      title: "Facundo Solano",
      role: t.facundo.role,
      text: t.facundo.text,
      img: "about3",
      skills: ["React", "Auth", "Forms", "Security"]
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />

      <main className="bg-black text-light min-vh-100 main-content">
        {/* Language Toggle Button */}
        <div className="position-fixed" style={{ top: "80px", right: "20px", zIndex: 1000 }}>
          <motion.div
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              borderRadius: "30px",
              padding: "4px",
              border: "1px solid #333",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
            }}
            whileHover={{ boxShadow: "0 4px 20px rgba(255, 2, 27, 0.2)" }}
          >
            <div style={{ display: "flex", gap: "4px", position: "relative" }}>
              <motion.div
                style={{
                  position: "absolute",
                  width: "50%",
                  height: "100%",
                  background: "linear-gradient(135deg, #ff021b 0%, #d90118 100%)",
                  borderRadius: "26px",
                  left: language === "en" ? "0" : "50%",
                  transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 2px 8px rgba(255, 2, 27, 0.4)"
                }}
              />
              <motion.button
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: "transparent",
                  border: "none",
                  color: language === "en" ? "#fff" : "#888",
                  padding: "8px 20px",
                  fontWeight: "700",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.5px"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage("en")}
              >
                EN
              </motion.button>
              <motion.button
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: "transparent",
                  border: "none",
                  color: language === "es" ? "#fff" : "#888",
                  padding: "8px 20px",
                  fontWeight: "700",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.5px"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage("es")}
              >
                ES
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.section 
          className="container py-5 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: "100px" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <img 
              src={logo} 
              alt="RollingCode Music Logo" 
              style={{ 
                width: "120px", 
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 5px 20px rgba(255, 2, 27, 0.3)"
              }} 
            />
          </motion.div>
          <h1 className="fw-bold display-3 mb-4" style={{ color: "#fff" }}>
            {t.title}
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem", color: "#b3b3b3" }}>
            {t.description}
          </p>
        </motion.section>

        <motion.section 
          className="container py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="row align-items-center">
            <div className="col-12">
              <h2 className="text-center fw-bold display-5 mb-4">{t.projectTitle}</h2>
              <p className="text-center lead mx-auto" style={{ maxWidth: "900px", color: "#b3b3b3", fontSize: "1.1rem" }}>
                {t.projectDescription}
              </p>
            </div>
          </div>
        </motion.section>


        <motion.section 
          className="container py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold display-5 mb-5">{t.teamTitle}</h2>
          <div className="row g-4 justify-content-center">
            <Cardabout cards={cardsInfo} />
          </div>
        </motion.section>


        <motion.section 
          className="container py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold display-5 mb-5">{t.techTitle}</h2>
          <div className="row justify-content-center g-4">
            {[
              { name: "React", color: "#61DAFB", path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" },
              { name: "React Router", color: "#CA4245", path: "M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.589-.41.42-.646 1.094-.646 1.843 0 .858.255 1.6.714 2.09l.052.057-1.046 1.046-.052-.054c-.492-.517-1.21-.778-2.077-.778-.704 0-1.33.23-1.783.653-.445.415-.714 1.004-.754 1.664l-.004.09v.995l-.049.016a2.866 2.866 0 00-1.566 1.091c-.254.396-.396.852-.411 1.315l-.001.085c0 .325.034.622.104.905.226.904.785 1.62 1.544 1.976.433.203.903.3 1.395.3.296 0 .584-.04.863-.12.48-.14.912-.39 1.28-.743l.037-.036 1.001 1.001-.045.046c-.502.504-.767 1.24-.767 2.127 0 .673.204 1.303.587 1.817.366.49.896.848 1.486 1.007.205.055.426.083.657.083.62 0 1.21-.212 1.66-.596.455-.388.732-.925.802-1.553l.006-.09v-1.026l.049-.016c.69-.213 1.288-.606 1.727-1.138.248-.3.43-.637.548-1.003.12-.376.175-.783.165-1.213l-.006-.092c0-.325-.034-.622-.104-.905-.226-.904-.785-1.62-1.544-1.976-.433-.203-.903-.3-1.395-.3-.296 0-.584.04-.863.12-.48.14-.912.39-1.28.743l-.037.036-1.001-1.001.045-.046c.502-.504.767-1.24.767-2.127 0-.673-.204-1.303-.587-1.817-.366-.49-.896-.848-1.486-1.007a2.306 2.306 0 00-.657-.083zm0 1.09c.16 0 .316.021.466.062.377.101.698.337.903.664.207.33.316.725.316 1.138 0 .637-.193 1.147-.558 1.474-.367.33-.903.506-1.508.506-.426 0-.83-.103-1.166-.293-.337-.19-.604-.469-.774-.806-.17-.337-.255-.725-.255-1.118 0-.637.193-1.147.558-1.474.367-.33.903-.506 1.508-.506zm-3.928 5.99c.426 0 .83.103 1.166.293.337.19.604.469.774.806.17.337.255.725.255 1.118 0 .637-.193 1.147-.558 1.474-.367.33-.903.506-1.508.506-.16 0-.316-.021-.466-.062-.377-.101-.698-.337-.903-.664-.207-.33-.316-.725-.316-1.138 0-.637.193-1.147.558-1.474.367-.33.903-.506 1.508-.506zm7.856 0c.16 0 .316.021.466.062.377.101.698.337.903.664.207.33.316.725.316 1.138 0 .637-.193 1.147-.558 1.474-.367.33-.903.506-1.508.506-.426 0-.83-.103-1.166-.293-.337-.19-.604-.469-.774-.806-.17-.337-.255-.725-.255-1.118 0-.637.193-1.147.558-1.474.367-.33.903-.506 1.508-.506zm-3.928 5.99c.426 0 .83.103 1.166.293.337.19.604.469.774.806.17.337.255.725.255 1.118 0 .637-.193 1.147-.558 1.474-.367.33-.903.506-1.508.506-.16 0-.316-.021-.466-.062-.377-.101-.698-.337-.903-.664-.207-.33-.316-.725-.316-1.138 0-.637.193-1.147.558-1.474.367-.33.903-.506 1.508-.506z" },
              { name: "Vite", color: "#646CFF", path: "m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.558.46a.306.306 0 0 1-.388-.355l1.558-5.403a.306.306 0 0 0-.388-.355l-2.388.46a.306.306 0 0 1-.332-.438L8.286 10.578Z" },
              { name: "JavaScript", color: "#F7DF1E", path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" },
              { name: "Bootstrap", color: "#7952B3", path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.172 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" },
              { name: "Git & GitHub", color: "#F05032", path: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" }
            ].map((tech) => (
              <div key={tech.name} className="col-6 col-md-4 col-lg-2">
                <motion.div 
                  className="text-center p-4 rounded h-100"
                  style={{ 
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                    border: "1px solid #333",
                    transition: "all 0.3s ease"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 2, 27, 0.3)",
                    borderColor: "#ff021b"
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    style={{ 
                      width: "50px", 
                      height: "50px", 
                      fill: tech.color,
                      margin: "0 auto"
                    }}
                  >
                    <path d={tech.path} />
                  </svg>
                  <div className="fw-semibold mt-3" style={{ color: "#fff", fontSize: "0.9rem" }}>{tech.name}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <style jsx>{`
        .main-content {
          padding-top: 20px;
        }
        
        @media (min-width: 992px) {
          .main-content {
            margin-left: 270px;
          }
        }
      `}</style>
    </>
  );
}

export default About;
