const PlanCard = ({ title, price, features = [], badge, onSelect }) => {
  return (
    <div
      className="card h-100 text-center w-100 bg-black text-white border-0 plan-card"
      style={{ maxWidth: "360px", minHeight: "440px" }}
    >
      <div className="card-body d-flex flex-column">
        {/* Badge */}
        {badge && (
          <span className="badge bg-danger align-self-center mb-3 px-3 py-2">
            {badge}
          </span>
        )}

        <h5 className="fw-bold fs-3">{title}</h5>

        <p className="display-6 text-danger mb-0">{price}</p>
        <span className="text-secondary">por mes</span>

        {/* Features */}
        <ul className="list-unstyled mt-4 text-start flex-grow-1">
          {features.map((feature, i) => (
            <li key={i} className="mb-2">
              ✔ {feature}
            </li>
          ))}
        </ul>

        <button className="btn btn-danger w-100 mt-3" onClick={onSelect}>
          Elegir plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
