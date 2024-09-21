import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navegacion = () => {
  const [token, setToken] = useState(false);
  const total = 25000;
  const handleChange = (token) => {
    console.log("token", token);
    setToken({ token: !token });
  };

  const { getTotal } = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navegacion">
        <Container>
          <h3 className=""> 🍕</h3>
          <Navbar.Brand href="#home"> Mamma Mía</Navbar.Brand>
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="./">
              <Button variant="outline-warning" className="text-white">
                🍕 Home
              </Button>
            </Link>

            <Nav hidden={!token} onChange={handleChange}>
              <Link to="./profile">
                <Button variant="outline-warning" className="text-white">
                  🔒 Profile
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="outline-warning"
                  onClick={handleChange}
                  className="text-white"
                >
                  🔒 Logout
                </Button>
              </Link>
            </Nav>
            <Nav hidden={token} onChange={handleChange}>
              <Link to="/Login">
                <Button
                  variant="outline-warning"
                  onClick={handleChange}
                  className="text-white"
                >
                  🔐 Login
                </Button>
              </Link>
              <Link to="/Registro">
                <Button variant="outline-warning" className="text-white">
                  🔐 Register
                </Button>
              </Link>
            </Nav>
          </Nav>
          <Nav className="justify-content-end ms-auto">
            <Link to="./carritoCompras">
              <Button variant="outline-light">🛒 Total: ${getTotal()}</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;

/* import { useState, useContext } from "react";
                  import Button from "react-bootstrap/Button";
                  import Container from "react-bootstrap/Container";
                  import Nav from "react-bootstrap/Nav";
                  import Navbar from "react-bootstrap/Navbar";
                  import { Link } from "react-router-dom";
                  import CartContext from "../context/CartContext";
                  
                  const Navegacion = () => {
                    const [token, setToken] = useState(false);
                    const total = 25000;
                    const handleChange = (token) => {
                      console.log("token", token);
                      setToken({ token: !token });
                      const { agregarCantidad, disminuirCantidad, calcularTotal, cantidades } =
                        useContext(CartContext);
                    };
                    return (
                      <>
                        <Navbar bg="dark" data-bs-theme="dark" className="navegacion">
                          <Container>
                            <h3 className=""> 🍕</h3>
                            <Navbar.Brand href="#home"> Mamma Mía</Navbar.Brand>
                            <Nav
                              className="me-auto my-4 my-lg-0"
                              style={{ maxHeight: "100px" }}
                              navbarScroll
                            >
                              <Link to="./">
                                {" "}
                                <Button variant="outline-warning" className="text-white">
                                  🍕 Home
                                </Button>
                              </Link>
                  
                              <Nav hidden={token ? false : true} onChange={handleChange}>
                                <Link to="./profile">
                                  {" "}
                                  <Button variant="outline-warning" className="text-white">
                                    🔒 Profile
                                  </Button>
                                </Link>
                                <Link to="/">
                                  {" "}
                                  <Button
                                    variant="outline-warning"
                                    onClick={() => setToken(!token)}
                                    className="text-white"
                                  >
                                    🔒 Logout
                                  </Button>
                                </Link>
                              </Nav>
                              <Nav hidden={token ? true : false} onChange={handleChange}>
                                <Link to="/Login">
                                  {" "}
                                  <Button
                                    variant="outline-warning"
                                    onClick={() => setToken(!token)}
                                    className="text-white"
                                  >
                                    🔐 Login
                                  </Button>
                                </Link>
                                <Link to="/Registro">
                                  {" "}
                                  <Button variant="outline-warning" className="text-white">
                                    🔐 Register
                                  </Button>
                                </Link>
                              </Nav>
                            </Nav>
                            <Nav className="justify-content-end ms-auto">
                              <Link to="./carritoCompras">
                                {" "}
                                <Button variant="outline-light">
                                  🛒 Total: $ {CartContext.calcularTotal}
                                </Button>
                              </Link>
                            </Nav>
                          </Container>
                        </Navbar>
                      </>
                    );
                  };
                  export default Navegacion;
                   */
