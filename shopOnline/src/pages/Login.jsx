import { Link } from "react-router";

function Login() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Parte 1: franja superior rosada con logo */}
      <div className="w-full h-[90px] bg-[#E86D87] flex items-start px-10 pt-2">
        <img
          src="/icons.svg"
          alt="Logo Puppy Love Shop"
          className="w-[70px] h-[70px] object-contain"
        />
      </div>

      {/* Parte 2: franja crema debajo del header */}
      <div className="w-full h-[28px] bg-[#FFFCE8]"></div>

      {/* Parte 3: contenido principal centrado */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        {/* Caja del login */}
        <div className="w-full max-w-[380px] bg-white rounded-[20px] border border-[#cfcfcf] shadow-[0_4px_10px_rgba(0,0,0,0.15)] px-8 py-12">
          <h1
            className="text-center font-bold text-3xl tracking-normal"
            style={{ color: "#C36483"}}>
                ¡Bienvenido de nuevo!
          </h1>

          {/* Input correo */}
          <input
            type="email"
            placeholder="Correo"
            className="w-full h-[48px] bg-[#f6dce2] rounded-md px-5 mb-6 outline-none text-gray-700 placeholder:text-gray-500"
          />

          {/* Input contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full h-[48px] bg-[#f6dce2] rounded-md px-5 mb-2 outline-none text-gray-700 placeholder:text-gray-500"
          />

          {/* Olvidó contraseña */}
          <div className="w-full flex justify-end mb-8">
            <a href="#" className="text-[#E86D87] text-sm font-semibold">
              ¿Olvidó su contraseña?
            </a>
          </div>

          {/* Botón iniciar sesión */}
          <button className="w-full h-[50px] rounded-md bg-[#E86D87] text-white text-[20px] font-bold mb-4 hover:opacity-95 transition">
            <Link to="/">Iniciar sesión</Link>            
          </button>

          {/* Botón registro */}
          <Link
            to="/register"
            className="w-full h-[50px] rounded-md bg-[#FFFCE8] border border-[#d8d1b2] text-[#E86D87] text-[18px] font-semibold flex items-center justify-center hover:opacity-95 transition"
          >
            ¿Cliente nuevo? Regístrate aquí
          </Link>
        </div>

        {/* Línea y texto inferior */}
        <div className="w-full max-w-[700px] mt-14">
          <div className="border-t-2 border-[#999393] mb-6"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#E86D87] text-[26px] font-extrabold uppercase">
              Puppy Love Shop
            </h2>
            <div className="w-[240px] border-t-[3px] border-[#E86D87] mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;