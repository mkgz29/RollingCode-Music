import PlanCard from "../components/PlanCard";
import SubscribeForm from "../components/SubscribeForm";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Button } from "bootstrap";
import plans from "../data/planes";

const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container my-5 col-10">
        <h1 className="text-center my-5 display-2">
          Ahora podes escuchar la musica que mas te apasiona sin anuncios y de
          manera ilimitada.
        </h1>
        <h2 className="text-center fs-4">
          Proba 2 meses gratis cualquiera de nuestros planes - Despues solo
          $2499/mes - Cancela en cualquier momento
        </h2>
        <div className="container my-5">
          <button className="btn btn-danger btn-primary">
            Probar 2 meses por $0
          </button>
        </div>
      </div>
      <div className="container-fluid bg-dark py-5">
        <h2 className="text-center mb-4 text-light">Elegí tu plan</h2>

        <div className="container text-center">
          <div className="row justify-content-center g-4">
            {plans.map((plan) => (
              <div key={plan.id} className="col-12 col-md-6 col-lg-4">
                <PlanCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  onSelect={() => setSelectedPlan(plan.id)}
                />
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="row justify-content-center mt-5">
              <div className="col-12 col-md-8 col-lg-6">
                <SubscribeForm plan={selectedPlan} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Subscribe;
