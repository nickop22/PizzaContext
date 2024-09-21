// eslint-disable-next-line react/prop-types
const Header = ({ titulo, descripcion }) => {
  return (
    <div className="header text-center">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};
export default Header;
