import PlanCard from "../components/PlanCard";
import SubscribeForm from "../components/SubscribeForm";
import Navbar from "../components/Navbar";
import { useState } from "react";
const plans = [
  {
    id: "Free",
    title: "Free",
    price: "$0",
    description: "Escuchá música con límites",
  },
  {
    id: "Premium",
    title: "Premium",
    price: "$299",
    description: "Música ilimitada sin anuncios",
  },
  {
    id: "Gold",
    title: "Gold",
    price: "$399",
    description: "Música ilimitada sin anuncios y escucharlas sin internet",
  },
];
const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h1 className="text-center mb-4">🎵 Elegí tu plan</h1>

        <div className="row">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              onSelect={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
        {selectedPlan && (
          <div className="mt-5">
            <SubscribeForm plan={selectedPlan} />
          </div>
        )}
      </div>
    </>
  );
};

export default Subscribe;
