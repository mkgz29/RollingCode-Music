const Faq = ({ items }) => {
  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="accordion accordion-flush" id="faqAccordion">
          {items.map((item, index) => (
            <div
              key={index}
              className="accordion-item mb-3"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                border: "1px solid #333",
                borderRadius: "12px",
                overflow: "hidden"
              }}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed text-light fw-semibold faq-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "20px 24px",
                    fontSize: "1.1rem",
                    boxShadow: "none"
                  }}
                >
                  {item.question}
                </button>
              </h2>

              <div
                id={`faq-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div 
                  className="accordion-body" 
                  style={{
                    color: "#b3b3b3",
                    padding: "0 24px 20px 24px",
                    fontSize: "1rem",
                    lineHeight: "1.6"
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .accordion-button:not(.collapsed) {
          background: transparent !important;
          color: #fff !important;
          box-shadow: none !important;
        }
        .accordion-button::after {
          filter: brightness(0) invert(1);
        }
        .accordion-button:focus {
          box-shadow: none !important;
          border-color: transparent !important;
        }
        .accordion-button:hover {
          background: rgba(255, 2, 27, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default Faq;
