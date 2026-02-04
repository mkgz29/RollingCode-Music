import PlanCard from "../components/PlanCard";
import SubscribeForm from "../components/SubscribeForm";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import plans from "../data/planes";
import questions from "../data/questions";
import Faq from "../components/Faq";

const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main className="main-content bg-black text-light min-vh-100" style={{ overflowX: "hidden", maxWidth: "100%" }}>
        {/* Hero Section */}
        <motion.div 
          className="container-fluid py-5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          style={{ 
            background: "linear-gradient(180deg, #1a1a1a 0%, #000 100%)",
            paddingTop: "40px",
            overflowX: "hidden"
          }}
        >
          <div className="container text-center">
            <motion.h1 
              className="display-3 fw-bold mb-4"
              style={{ 
                color: "#fff",
                lineHeight: "1.2"
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Listen to unlimited music without ads
            </motion.h1>
            <motion.p 
              className="lead mb-4"
              style={{ 
                color: "#b3b3b3",
                fontSize: "1.3rem",
                maxWidth: "800px",
                margin: "0 auto"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Try 2 months free on any plan - Then only $2499/month - Cancel anytime
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                className="btn btn-danger btn-lg px-5 py-3 mt-3"
                onClick={() => {
                  setSelectedPlan("Premium");
                  setTimeout(() => {
                    document
                      .getElementById("subscribe-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  borderRadius: "50px",
                  boxShadow: "0 8px 24px rgba(255, 2, 27, 0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
              >
                Try 2 months for $0
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Plans Section */}
        <div className="container-fluid py-5" style={{ backgroundColor: "#0a0a0a", overflowX: "hidden" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-5 display-5 fw-bold text-light">Choose your plan</h2>

            <div className="container" style={{ maxWidth: "1100px", padding: "0 15px", margin: "0 auto" }}>
              <div className="row g-4" style={{ justifyContent: "center" }}>
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PlanCard
                      title={plan.title}
                      price={plan.price}
                      features={plan.features}
                      badge={plan.badge}
                      onSelect={() => setSelectedPlan(plan.id)}
                    />
                  </motion.div>
                ))}
              </div>

              {selectedPlan && (
                <motion.div
                  id="subscribe-form"
                  className="row justify-content-center mt-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="col-12 col-md-8 col-lg-6">
                    <SubscribeForm plan={selectedPlan} />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="container-fluid py-5" style={{ backgroundColor: "#000" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-5 display-5 fw-bold text-light">Frequently asked questions</h2>
            <div className="container">
              <Faq items={questions} />
            </div>
          </motion.div>
        </div>
      </main>

      <style jsx>{`
        .main-content {
          padding-top: 0;
          overflow-x: hidden !important;
          max-width: 100vw !important;
        }
        
        @media (min-width: 992px) {
          .main-content {
            margin-left: 270px;
          }
        }

        .container, .container-fluid {
          overflow-x: hidden !important;
          max-width: 100% !important;
        }

        .row {
          overflow-x: visible !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .col-12, .col-sm-6, .col-lg-4 {
          padding-left: 10px !important;
          padding-right: 10px !important;
        }
      `}</style>
    </>
  );
};

export default Subscribe;
