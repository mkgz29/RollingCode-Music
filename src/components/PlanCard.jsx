const PlanCard = ({ title, price, features = [], badge, onSelect }) => {
  const isPopular = badge === "Most popular";
  
  return (
    <div
      className="card text-white border-0 plan-card display-around"
      style={{ 
        width: "100%",
        maxWidth: "400px",
        background: isPopular 
          ? "linear-gradient(135deg, #2a0a0a 0%, #1a0505 100%)" 
          : "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
        border: isPopular 
          ? "2px solid #ff021b !important" 
          : "1px solid #333 !important",
        borderRadius: "20px",
        boxShadow: isPopular 
          ? "0 8px 32px rgba(255, 2, 27, 0.4)" 
          : "0 4px 20px rgba(0, 0, 0, 0.4)",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = isPopular 
          ? "0 12px 40px rgba(255, 2, 27, 0.5)"
          : "0 8px 32px rgba(255, 2, 27, 0.3)";
        e.currentTarget.style.borderColor = "#ff021b";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = isPopular 
          ? "0 8px 32px rgba(255, 2, 27, 0.4)"
          : "0 4px 20px rgba(0, 0, 0, 0.4)";
        e.currentTarget.style.borderColor = isPopular ? "#ff021b" : "#333";
      }}
    >
      {isPopular && (
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(255, 2, 27, 0.08) 0%, transparent 70%)",
            borderRadius: "20px",
            pointerEvents: "none",
            zIndex: 0
          }}
        />
      )}
      
      <div className="card-body p-4 position-relative" style={{ zIndex: 1 }}>
        {badge && (
          <span 
            className="badge d-inline-block mb-3 px-3 py-1"
            style={{
              fontSize: "0.7rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              borderRadius: "20px",
              background: isPopular 
                ? "linear-gradient(135deg, #ff021b 0%, #cc0116 100%)"
                : "#dc3545",
              boxShadow: isPopular 
                ? "0 2px 8px rgba(255, 2, 27, 0.4)" 
                : "none"
            }}
          >
            {badge}
          </span>
        )}

        <h5 className="fw-bold mb-2" style={{ fontSize: "1.8rem" }}>{title}</h5>

        <div className="mb-1">
          <span className="display-5 text-danger fw-bold">{price}</span>
        </div>
        <span className="text-white-50 mb-3 d-block" style={{ fontSize: "0.85rem" }}>per month</span>

        <ul className="list-unstyled mt-3 mb-4 text-start">
          {features.map((feature, i) => (
            <li 
              key={i} 
              className="mb-2 d-flex align-items-start"
              style={{ fontSize: "0.88rem" }}
            >
              <span className="text-success me-2" style={{ fontSize: "1.1rem", lineHeight: "1" }}>✓</span>
              <span style={{ lineHeight: "1.4" }}>{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          className="btn btn-danger w-100 mt-2" 
          onClick={onSelect}
          style={{
            padding: "12px",
            fontSize: "0.95rem",
            fontWeight: "700",
            borderRadius: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            boxShadow: "0 4px 12px rgba(255, 2, 27, 0.3)",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 2, 27, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 2, 27, 0.3)";
          }}
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
