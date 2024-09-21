/* import Grilla from "./Grilla";
import Header from "./Header";
import Pizza from "./Pizza"; */
import { useEffect, useState } from "react";
import Grilla from "../componentes/Grilla";

/* const Home = () => {
  return (
    <>
      <Header
        titulo="Mamma Mia"
        descripcion="Tenemos las mejores pizzas que podrás encontrar"
      />
      <Grilla />
    </>
  );
}; */
const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  /*   useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => esponse.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []); */
  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/pizzas");
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    obtenerPizzas(); // Llamada a la función asíncrona
  }, []); // El array vacío [] asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <div>
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        <Grilla pizzas={pizzas} />
      </div>
    </div>
  );
};
export default Home;
