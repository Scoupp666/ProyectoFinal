import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Lcontainer">
        <Link to={"/inicio"}>Inicio</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/portafolio"}>Portafolio</Link>
      </div>
    </div>
  );
};

export default Navbar;
