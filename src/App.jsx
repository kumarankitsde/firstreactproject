import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./Tours";
export default function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  if (tours.length === 0) {
    return setTours(data);
  }
  return (
    <main>
      <div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </main>
  );
}
