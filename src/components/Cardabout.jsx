import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";

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
          <div className="card bg-dark text-light h-100 border-0 shadow-sm">
            <img
              src={images[card.img]}
              className="card-img-top"
              alt={card.title}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text text-secondary">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardabout;
