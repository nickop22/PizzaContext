import CardPizza from "../pages/CardPizza";

const Grilla = ({ pizzas }) => {
  return (
    <div className="container productos">
      <div className="row ms-auto">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredientes={pizza.ingredients}
              id={pizza.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grilla;
