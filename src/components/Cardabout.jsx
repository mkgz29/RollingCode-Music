import img1 from "../assets/img/about1.jpg";
import img2 from "../assets/img/about2.jpg";
import img3 from "../assets/img/about3.jpg";

const images = {
  about1: img1,
  about2: img2,
  about3: img3,
};

const Cardabout = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <div className="col-md-4" key={card.id}>
          <div className="card bg-dark text-light h-100 border-0 shadow-sm about-card" style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
            border: "1px solid #333 !important",
            transition: "all 0.3s ease",
            overflow: "hidden"
          }}>
            <div style={{ overflow: "hidden", height: "400px" }}>
              <img
                src={images[card.img]}
                className="card-img-top"
                alt={card.title}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  transition: "transform 0.3s ease"
                }}
              />
            </div>
            <div className="card-body text-center p-4">
              <h5 className="card-title fw-bold mb-2" style={{ fontSize: "1.3rem" }}>{card.title}</h5>
              <p className="text-danger fw-semibold mb-3" style={{ fontSize: "0.95rem" }}>{card.role}</p>
              <p className="card-text" style={{ color: "#b3b3b3", fontSize: "0.9rem", lineHeight: "1.6" }}>{card.text}</p>
              {card.skills && (
                <div className="mt-3 d-flex flex-wrap gap-2 justify-content-center">
                  {card.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge"
                      style={{
                        background: "rgba(255, 2, 27, 0.15)",
                        color: "#ff021b",
                        border: "1px solid rgba(255, 2, 27, 0.3)",
                        padding: "0.4rem 0.8rem",
                        fontSize: "0.75rem"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 2, 27, 0.2) !important;
          border-color: #ff021b !important;
        }
        .about-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default Cardabout;
