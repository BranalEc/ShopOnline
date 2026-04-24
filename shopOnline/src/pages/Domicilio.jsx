import { Link } from "react-router";

function Domicilio() {
  const pink = "#E86D87";

  return (
    <div className="w-full min-h-screen bg-white font-sans flex justify-center">
      <div className="flex gap-24 pt-12">
        {/* FORMULARIO */}
        <div className="w-[720px]">
          <h1 className="text-6xl font-semibold text-black text-center">
            Entrega a domicilio estándar
          </h1>

          {/* DATOS */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black text-center mb-5">
              Datos del destinatario
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              <input
                type="text"
                placeholder="Nombre"
                className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
              />

              <input
                type="text"
                placeholder="Apellido"
                className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
              />

              <input
                type="email"
                placeholder="Correo"
                className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
              />

              <div className="h-[45px] border border-gray-300 rounded-md px-5 flex items-center">
                <span className="text-black text-sm">+503</span>
                <span className="mx-4 h-6 border-l border-gray-400"></span>
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="w-full outline-none text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* DIRECCIÓN */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black text-center mb-5">
              Dirección de entrega
            </h2>

            <div className="space-y-8">
              <input
                type="text"
                placeholder="Calle y número"
                className="w-full h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
              />

              <input
                type="text"
                placeholder="Escalera, piso...(opcional)"
                className="w-full h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
              />

              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                <input
                  type="text"
                  placeholder="Código postal"
                  className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Región"
                  className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Ciudad"
                  className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-gray-500"
                />

                <select className="h-[45px] border border-gray-300 rounded-md px-5 outline-none text-black">
                  <option>El Salvador</option>
                  <option>Guatemala</option>
                  <option>Honduras</option>
                </select>
              </div>
            </div>
          </div>

          {/* BOTONES */}
          <div className="flex items-center justify-between mt-24">
            <Link to="/cart">
              <button
                type="button"
                className="flex items-center gap-3 text-black text-lg"
              >
                <span className="text-gray-400 text-2xl">‹</span>
                Volver al carrito
              </button>
            </Link>

            <Link to="/delivery">
              <button
                type="button"
                className="w-[310px] h-[52px] rounded-md text-white text-xl font-bold"
                style={{ backgroundColor: pink }}
              >
                Continuar
              </button>
            </Link>
          </div>
        </div>

        {/* RESUMEN */}
        <div className="w-[430px] h-[590px] bg-white rounded-lg border border-gray-200 shadow-xl px-9 py-9 mt-6">
          <h2 className="text-2xl font-medium text-black mb-10">
            Resumen de compra
          </h2>

          {/* PRODUCTO 1 */}
          <div className="flex items-center gap-6 mb-14">
            <img
              src="/img/cart-product-1.png"
              alt="Producto 1"
              className="w-[95px] h-[115px] object-contain"
            />

            <div>
              <h3 className="text-[14px] font-semibold leading-tight text-black w-[190px]">
                Huesos Masticables Grandes Sabor Pollo
              </h3>
              <p className="text-[14px] text-black mt-3">$6.00</p>
            </div>
          </div>

          {/* PRODUCTO 2 */}
          <div className="flex items-center gap-6 mb-10">
            <img
              src="/img/cart-product-2.png"
              alt="Producto 2"
              className="w-[95px] h-[115px] object-contain"
            />

            <div>
              <h3 className="text-[14px] font-semibold leading-tight text-black w-[190px]">
                Alimento Húmedo Cachorro Res
              </h3>
              <p className="text-[14px] text-black mt-3">$6.00</p>
            </div>
          </div>

          <div
            className="w-full h-[2px] mt-8 mb-8"
            style={{ backgroundColor: pink }}
          ></div>

          <div className="space-y-6 text-[17px]">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-gray-400">$12.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Envío</span>
              <span className="text-gray-400">$3.50</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Total</span>
              <span className="text-gray-400">$15.50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domicilio;