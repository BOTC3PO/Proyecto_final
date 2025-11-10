export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 text-center text-sm space-y-3">
          <p>© 2024 Proyecto Challenger. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            <a className="hover:underline" href="#">Términos</a>
            <a className="hover:underline" href="#">Privacidad</a>
            <a className="hover:underline" href="#">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
