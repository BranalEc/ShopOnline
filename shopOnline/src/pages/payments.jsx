import { Link } from "react-router";

function Payment() {
  const pink = "#E86D87";

  return (
    <div className="w-full min-h-screen bg-white px-20 py-12 font-sans">
      <div className="grid grid-cols-[1.35fr_0.8fr] gap-24">
        {/* LADO IZQUIERDO */}
        <div className="pl-8">
          {/* NAVEGACIÓN SUPERIOR */}
          <div className="flex items-center gap-6 text-[17px] text-black">
            <Link to="/domicilio">
              <span className="cursor-pointer">Método de entrega</span>
            </Link>

            <span className="text-gray-400">›</span>

            <Link to="/delivery">
              <span className="cursor-pointer">Método de pago</span>
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-black mt-9">
            Tarjeta bancaria
          </h1>

          {/* FORMULARIO TARJETA */}
          <div className="mt-7 w-[320px]">
            <div className="relative">
              <span className="absolute left-8 top-1/2 -translate-y-1/2 text-xl">
                ▭
              </span>

              <input
                type="text"
                placeholder="Número de tarjeta"
                className="w-full h-[42px] border border-gray-300 rounded-md pl-20 pr-4 outline-none text-gray-500 text-[13px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-16 mt-7">
              <input
                type="text"
                placeholder="Válido hasta"
                className="h-[42px] border border-gray-300 rounded-md px-4 outline-none text-gray-500 text-[13px]"
              />

              <input
                type="text"
                placeholder="CVV"
                className="h-[42px] border border-gray-300 rounded-md px-4 outline-none text-gray-500 text-[13px]"
              />
            </div>

            <input
              type="text"
              placeholder="Titular de la tarjeta"
              className="w-full h-[42px] border border-gray-300 rounded-md px-4 outline-none text-gray-500 text-[13px] mt-7"
            />
          </div>

          {/* BOTONES */}
          <div className="flex items-center justify-between mt-44 w-[640px]">
            <Link to="/delivery">
              <button
                type="button"
                className="flex items-center gap-3 text-black text-[15px]"
              >
                <span className="text-gray-400 text-2xl">‹</span>
                Volver al método de pago
              </button>
            </Link>

            <Link to="/lastpayment">
              <button
                type="button"
                className="w-[255px] h-[42px] rounded-md text-white text-[17px] font-bold"
                style={{ backgroundColor: pink }}
              >
                Continuar
              </button>
            </Link>
          </div>
        </div>

        {/* RESUMEN */}
        <div className="w-[410px] min-h-[590px] bg-white rounded-lg border border-gray-200 shadow-xl px-9 py-9">
          <h2 className="text-2xl font-medium text-black mb-10">
            Resumen de compra
          </h2>

          {/* PRODUCTO 1 */}
          <div className="flex items-start gap-6 mb-16">
            <img
              src="/img/cart-product-1.png"
              alt="Producto 1"
              className="w-[95px] h-[110px] object-contain"
            />

            <div>
              <h3 className="text-[14px] font-semibold leading-tight text-black w-[170px]">
                Huesos Masticables Grandes Sabor Pollo
              </h3>

              <p className="text-[14px] text-black mt-4">$6.00</p>
            </div>
          </div>

          {/* PRODUCTO 2 */}
          <div className="flex items-start gap-6 mb-9">
            <img
              src="/img/cart-product-2.png"
              alt="Producto 2"
              className="w-[95px] h-[110px] object-contain"
            />

            <div>
              <h3 className="text-[14px] font-semibold leading-tight text-black w-[170px]">
                Alimento Húmedo Cachorro Res
              </h3>

              <p className="text-[14px] text-black mt-4">$6.00</p>
            </div>
          </div>

          <div
            className="w-full h-[2px] mt-10 mb-8"
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

      <hr className="mt-56 border-t border-black" />
    </div>
  );
}

export default Payment;