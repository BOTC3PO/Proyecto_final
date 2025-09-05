import { Link, Outlet } from "react-router-dom";
export default function GuestLayout(){
  return (
    <div className="min-h-dvh">
      <nav className="border-b p-4 flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <Link to="/pricing">Precios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <main className="max-w-4xl mx-auto p-4"><Outlet/></main>
    </div>
  );
}