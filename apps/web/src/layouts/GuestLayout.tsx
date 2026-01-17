import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer";
export default function GuestLayout(){
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="border-b p-4 flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <Link to="/precios">Precios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <main className="max-w-4xl mx-auto p-4 flex-grow"><Outlet/></main>
      <Footer></Footer>
    </div>
  );
}
