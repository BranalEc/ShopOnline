import { Link } from "react-router";

function Footer() {
  return (
    <footer className="w-full bg-white px-10 py-8">
      {/* Parte 1: línea superior */}
      <div className="w-full border-t-4 border-[#999393] mb-10"></div>

      {/* Parte 2: contenido principal del footer */}
      <div className="grid grid-cols-3 items-start">
        {/* Parte 3: enlaces rápidos */}
        <div className="flex flex-col gap-3 text-left">
          <h3 className="text-[#E86D87] font-bold uppercase text-lg">
            Enlaces rápidos
          </h3>

          <Link to="/" className="text-[#E86D87] hover:text-[#c95c74] transition">
            Inicio
          </Link>
          <Link to="/category" className="text-[#E86D87] hover:text-[#c95c74] transition">
            Productos
          </Link>
          <Link to="/services" className="text-[#E86D87] hover:text-[#c95c74] transition">
            Servicios
          </Link>
          <Link to="/feedback" className="text-[#E86D87] hover:text-[#c95c74] transition">
            Reseñas
          </Link>
          <Link to="/plans" className="text-[#E86D87] hover:text-[#c95c74] transition">
            Promociones
          </Link>
          <Link to="/aboutUs" className="text-[#E86D87] hover:text-[#c95c74] transition">
            Nosotros
          </Link>
        </div>

        {/* Parte 4: título central */}
        <div className="flex flex-col items-center justify-center mt-6">
          <h2 className="text-[#E86D87] text-5xl font-extrabold uppercase text-center">
            Puppy Love Shop
          </h2>
          <div className="w-[360px] border-t-4 border-[#E86D87] mt-4"></div>
        </div>

        {/* Parte 5: contacto */}
        <div className="flex flex-col gap-3 items-end justify-start text-right">
          <h3 className="text-[#E86D87] font-bold uppercase text-lg">
            Contáctenos
          </h3>

          <p className="text-[#E86D87]">(+503 9674 3754)</p>
          <p className="text-[#E86D87]">(+503 6134 5236)</p>
          <p className="text-[#E86D87]">puppyloveshop@gmail.com</p>
          <p className="text-[#E86D87]">Puppyloveshop._</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;