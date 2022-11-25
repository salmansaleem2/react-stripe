import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
import Cardcomponent from "./components/Cardcomponent";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "./components/Cardcomponent";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
function App() {
  console.log(stripePromise);
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        {/* <Cardcomponent />
         */}
        <InjectedCheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
