import { Link } from "react-router";

function CreateAcount() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Parte 1: barra superior rosada con logo */}
      <div className="w-full h-[90px] bg-[#E86D87] flex items-start px-10 pt-2">
        <img
          src="/icons.svg"
          alt="Logo Puppy Love Shop"
          className="w-[70px] h-[70px] object-contain"
        />
      </div>

      {/* Parte 2: franja crema */}
      <div className="w-full h-[28px] bg-[#FFFCE8]"></div>

      {/* Parte 3: contenido principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        {/* Parte 4: tarjeta del registro */}
        <div className="w-full max-w-[380px] bg-white rounded-[20px] border border-[#cfcfcf] shadow-[0_4px_10px_rgba(0,0,0,0.15)] px-8 py-10">
          {/* Parte 5: título */}
          <h1
            className="text-center mb-8"
            style={{
              color: "#C36483",              
              fontWeight: 600,
              fontSize: "32px",
            }}
          >
            ¡Regístrate!
          </h1>

          {/* Parte 6: inputs */}
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full h-[48px] bg-[#f6dce2] rounded-md px-4 mb-6 outline-none text-gray-700 placeholder:text-gray-500"
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full h-[48px] bg-[#f6dce2] rounded-md px-4 mb-6 outline-none text-gray-700 placeholder:text-gray-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full h-[48px] bg-[#f6dce2] rounded-md px-4 mb-5 outline-none text-gray-700 placeholder:text-gray-500"
          />

          {/* Parte 7: checkbox y texto */}
          <label className="flex items-start gap-2 mb-6 cursor-pointer">
            <input type="checkbox" className="mt-1 accent-[#E86D87]" />
            <span className="text-[12px] leading-4 text-[#9FC6E8] font-medium">
              Acepto términos y condiciones y autorizo tratamiento de datos y
              políticas.
            </span>
          </label>

          {/* Parte 8: botón crear cuenta */}
          <button className="w-full h-[50px] rounded-md bg-[#E86D87] text-white text-[20px] font-bold mb-4 hover:opacity-95 transition">
            Crear cuenta
          </button>

          {/* Parte 9: botón para ir al login */}
          <Link
            to="/Login"
            className="w-full h-[50px] rounded-md bg-[#FFFCE8] border border-[#d8d1b2] text-[#C36483] text-[16px] font-semibold flex items-center justify-center hover:opacity-95 transition"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>

        {/* Parte 10: línea y texto inferior */}
        <div className="w-full max-w-[700px] mt-16">
          <div className="border-t-2 border-[#999393] mb-6"></div>

          <div className="flex flex-col items-center">
            <h1
              className="text-center font-bold text-3xl tracking-normal"
              style={{
                color: "#E86D87",
                fontFamily: "League Spartan",                
              }}
            >
              Puppy Love Shop
            </h1>

            <div className="w-[190px] border-t-[3px] border-[#E86D87] mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAcount;