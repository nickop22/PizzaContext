import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar los datos de la pizza

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas/p005") // Endpoint fijo para la pizza con ID p001
      .then((response) => response.json())
      .then((data) => setPizza(data)) // Guardar los datos de la pizza en el estado
      .catch((error) => console.error("Error al obtener la pizza:", error));
  }, []); // El array vacío [] asegura que el efecto solo se ejecute una vez al montar el componente

  if (!pizza) {
    // Mostrar un mensaje mientras se cargan los datos
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
