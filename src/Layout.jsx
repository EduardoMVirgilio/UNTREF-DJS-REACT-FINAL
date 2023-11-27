import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/nosotros"}>About</Link>
        <Link to={"/contacto"}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
