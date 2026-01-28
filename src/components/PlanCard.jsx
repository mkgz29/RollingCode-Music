const PlanCard = ({ title, price, description, onSelect }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow text-center">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h4 className="text-danger">{price}</h4>
          <p className="card-text">{description}</p>

          <button
            className="btn btn-dark mt-3"
            onClick={() => {
              onSelect();
            }}
          >
            Elegir plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
