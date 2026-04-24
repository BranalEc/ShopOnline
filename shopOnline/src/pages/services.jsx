import React, { useState } from "react";

function Services() {
  const [mascota, setMascota] = useState("gato");
  const [pago, setPago] = useState("anual");

  return (
    <div className="min-h-screen bg-white px-6 py-10 font-sans">
      <main className="max-w-6xl mx-auto">
        {/* Banner */}
        <section className="relative overflow-hidden rounded-lg bg-[#F9C8D0] shadow-lg px-12 py-8 flex items-center justify-between">
          <div className="max-w-md z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-16 bg-[#E88BA2] flex items-center justify-center">
                <img
                  src="/src/assets/logo.png"
                  alt="Puppy Love Shop"
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold leading-6 text-[#101820]">
                PUPPY <br /> LOVE SHOP
              </h2>
            </div>

            <h1 className="text-3xl font-extrabold leading-8 text-[#101820] mb-4">
              Si tu mascota no va al <br />
              veterinario, el veterinario visita <br />
              tu mascota
            </h1>

            <p className="text-sm text-[#333] mb-5">
              Si llega a pasar algo, descubre aquí los planes que <br />
              tenemos para cuidarlo
            </p>

            <button className="bg-[#461A91] text-white text-sm px-10 py-2 rounded hover:bg-[#35136f] transition">
              Ver planes
            </button>
          </div>

          <div className="hidden md:flex items-center gap-10 pr-10">
            <img
              src="/src/assets/casita.png"
              alt="Casa de mascota"
              className="w-28 object-contain"
            />

            <div className="flex flex-col items-center gap-5">
              <img
                src="/src/assets/globo-perro.png"
                alt="Globo perro"
                className="w-32 object-contain"
              />

              <img
                src="/src/assets/botiquin.png"
                alt="Botiquín"
                className="w-24 object-contain rotate-12"
              />
            </div>
          </div>

          <span className="absolute right-5 bottom-5 text-white text-3xl">
            ✦
          </span>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <div className="bg-[#FFFDEB] border border-[#E5DFA9] rounded-md px-4 py-6 flex items-center gap-8">
            <div className="w-36 h-36 rounded-full bg-[#D7F0FF] flex items-center justify-center shrink-0">
              <img
                src="/src/assets/mascotas.png"
                alt="Mascotas"
                className="w-32 object-contain"
              />
            </div>

            <div>
              <h3 className="text-2xl leading-6 font-medium text-black">
                Orientación médica <br />
                veterinaria
              </h3>
              <p className="text-xs mt-2 text-gray-700">
                Disponibles siempre para ti
              </p>
            </div>
          </div>

          <div className="bg-[#FFFDEB] border border-[#E5DFA9] rounded-md px-4 py-6 flex items-center gap-8">
            <div className="w-36 h-36 rounded-full bg-[#D7F0FF] flex items-center justify-center shrink-0">
              <img
                src="/src/assets/veterinario.png"
                alt="Veterinario"
                className="w-28 object-contain"
              />
            </div>

            <div>
              <h3 className="text-2xl leading-6 font-medium text-black">
                Asistencias <br />
                veterinarias virtual y <br />
                en casa
              </h3>
              <p className="text-xs mt-2 text-gray-700">
                Productos hechos para su comodidad y <br />
                diversión
              </p>
            </div>
          </div>
        </section>
        <br /><br />

        {/* Título */}
        <h2 className="text-xl font-medium text-black mt-12 mb-6">
          Si tu mascota no va al veterinario, el veterinario visita tu mascota
        </h2>
        <br /><br />
        {/* Selector mascota */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-md overflow-hidden">
            <button
              onClick={() => setMascota("perro")}
              className={`flex items-center gap-2 px-8 py-2 text-white text-lg transition ${
                mascota === "perro" ? "bg-[#E85D7C]" : "bg-[#F6C5CF]"
              }`}
            >
              <span>🐶</span>
              Perro
            </button>

            <button
              onClick={() => setMascota("gato")}
              className={`flex items-center gap-2 px-8 py-2 text-white text-lg transition ${
                mascota === "gato" ? "bg-[#E85D7C]" : "bg-[#F6C5CF]"
              }`}
            >
              <span>🐱</span>
              Gato
            </button>
          </div>
        </div>

        {/* Plan */}
        <section className="flex justify-center">
          <div className="w-80 bg-white rounded-md shadow-xl border border-gray-200 px-8 py-6 text-center">
            <h3 className="text-base font-medium text-black">Plan Oro</h3>

            <p className="text-3xl text-[#77CFFF] font-light mt-1">
              $350.000
            </p>

            <p className="text-[10px] text-gray-400 mb-6">
              Paga una vez al año
            </p>

            <ul className="text-left space-y-4 text-xs text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-500">●</span>
                Consulta Veterinaria virtual ilimitada.*
              </li>

              <li className="flex items-start gap-2">
                <span className="text-gray-500">●</span>
                <span>
                  Dos desparasitaciones internas <br />
                  Cubre hematica.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-gray-500">●</span>
                Dos consultas veterinarias presenciales al año.
              </li>

              <li className="flex items-start gap-2">
                <span className="text-gray-500">●</span>
                Esquema de vacunación felino anual.
              </li>
            </ul>

            <div className="text-left mb-6">
              <p className="text-xs font-semibold mb-3">
                Selecciona modalidad de pago
              </p>

              <div className="border border-[#F4A0B2] rounded px-3 py-3 space-y-3 bg-[#FFF6F8]">
                <label className="flex items-center justify-between text-xs cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pago"
                      checked={pago === "anual"}
                      onChange={() => setPago("anual")}
                      className="accent-[#E85D7C]"
                    />
                    Pago anual
                  </span>

                  <span className="text-[#E85D7C] font-semibold">$350.00</span>
                </label>

                <label className="flex items-center justify-between text-xs cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pago"
                      checked={pago === "mensual"}
                      onChange={() => setPago("mensual")}
                      className="accent-[#E85D7C]"
                    />
                    Pago mes a mes
                  </span>

                  <span className="text-[#E85D7C] font-semibold">$44.00</span>
                </label>
              </div>
            </div>

            <button className="bg-[#E85D7C] text-white text-base font-medium px-10 py-3 rounded-lg hover:bg-[#d94868] transition">
              Comprar ahora
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Services;