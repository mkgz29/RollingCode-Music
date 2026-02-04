const Faq = ({ items }) => {
  return (
    <section className="bg-dark py-5">
      <div className="container-fluid px-0">
        <h2 className="text-center mb-4 text-light">Preguntas frecuentes</h2>

        <div className="accordion accordion-flush" id="faqAccordion">
          {items.map((item, index) => (
            <div
              key={index}
              className="accordion-item bg-dark text-light border-0"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark text-light fw-semibold faq-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                >
                  {item.question}
                </button>
              </h2>

              <div
                id={`faq-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-secondary">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
