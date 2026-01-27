import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about1.jpg";

const images = {
  about1: img1,
  about2: img2,
  about3: img3,
};

const Cardabout = ({ cards }) => {
  return (
    <div className="container text-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col" key={card.id}>
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img
                src={images[card.img]}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardabout;
