import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function CardPizza({ img, name, ingredientes, price, id }) {
  const { addToCart } = useContext(CartContext);
  const pizza = { img, name, ingredientes, price, id };
  return (
    <Card border="warning" className="text-center m-3">
      <Card.Img variant="top" src={img} className="img-fluid imgCard" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Text>Ingredientes:</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          <span>🍕</span>
          {ingredientes}
        </Card.Subtitle>
      </Card.Body>
      <hr />
      <Card.Title>
        Precio: $ <span>{price}</span>
      </Card.Title>
      <Card.Body className="flex">
        <Card className=" col md-col-4">
          <Button variant="secondary">Ver más 👀</Button>
        </Card>
        <Card className="col md-col-4">
          <Button variant="dark" onClick={() => addToCart(pizza)}>
            Añadir 🛒
          </Button>
        </Card>
      </Card.Body>
    </Card>
  );
}
CardPizza.protoType = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardPizza;
