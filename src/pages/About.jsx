import Navbar from "../components/navbar";

const About = () => {
  return (
    <div className="container-fluid min-vh-100 bg-dark text-light">
      <div className="row min-vh-100">

        
        <aside className="col-12 col-md-3 col-lg-2 p-3 border-end border-secondary">
          <Navbar />
        </aside>

        <main className="col-12 col-md-9 col-lg-10 p-4">
          <div className="row g-4 justify-content-center position-relative"style={{top:"90px"}}>
           
            <div className="col-12 col-md-6 col-lg-5 d-flex flex-column position-relative">

  
  <div className="card text-light shadow-lg border border-secondary bg-transparent glass-card mb-5">
    <div className="card-body text-center d-flex flex-column">
      <img
        src="/src/assets/img/your-photo.jpg"
        alt="Facundo Solano"
        className="img-fluid rounded-circle mb-3 mx-auto"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />

      <h5 className="card-title">Facundo Solano</h5>

      <p className="card-text">
        Desarrollador frontend en formación, enfocado en React,
        Bootstrap y buenas prácticas de UX/UI.
      </p>
    </div>
  </div>

  
  <div style={{ height: "200px" }} />

  
  <div className="card text-light shadow-lg border border-secondary bg-transparent glass-card">
    <div className="card-body text-center d-flex flex-column">
      <img
        src="/src/assets/img/third-photo.jpg"
        alt="Benja"
        className="img-fluid rounded-circle mb-3 mx-auto"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />

      <h5 className="card-title">Benja</h5>

      <p className="card-text">
        Proyecto colaborativo enfocado en React, diseño responsive
        y buenas prácticas de desarrollo frontend.
      </p>
    </div>
  </div>
</div>



<div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
  <div className="card text-light shadow-lg border border-secondary bg-transparent glass-card mt-4">
    <div className="card-body text-center d-flex flex-column">
      <img
        src="/src/assets/img/partner-photo.jpg"
        alt="Miguel Ramon"
        className="img-fluid rounded-circle mb-3 mx-auto"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />

      <h5 className="card-title">Ramon Gomez</h5>

      <p className="card-text">
        Desarrollador frontend con foco en diseño, estructura
        y trabajo en equipo.
      </p>
    </div>
  </div>
</div>

      
            


          </div>
        </main>

      </div>
    </div>
  );
};

export default About;