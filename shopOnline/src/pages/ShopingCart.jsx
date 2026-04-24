import { Link } from "react-router";
function Cart() {
  const pink = "#E86D87";

  return (
    <div className="w-full min-h-screen bg-white px-16 py-6 font-sans">
      {/* Volver */}
      <div className="flex items-center gap-2 text-sm" style={{ color: pink }}>
        <span className="text-2xl">‹</span>
        <span>Continuar comprando</span>
      </div>

      {/* Encabezado */}
      <div className="flex justify-between items-start mt-7">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Carrito de compras
          </h1>
          <p className="text-gray-400 mt-3">2 artículos en el carrito</p>
        </div>

        <button
          className="flex items-center gap-2 text-base"
          style={{ color: "#c75d7b" }}
        >
          <span>🗑</span>
          <span>Vaciar el carrito de compras</span>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-[1.4fr_0.9fr] gap-20 mt-10">
        {/* Productos */}
        <div className="space-y-10">
          {/* Producto 1 */}
          <div className="h-[180px] rounded-xl border-[3px] border-[#0094ff] shadow-lg flex items-center px-12">
            <img
              src="/img/cart-product-1.png"
              alt="Producto 1"
              className="w-[115px] h-[140px] object-contain"
            />

            <div className="flex-1 ml-8">
              <p className="text-gray-400 font-bold uppercase">Alimento</p>

              <h3 className="text-black text-[17px] mt-4">
                Huesos Masticables Grandes Sabor Pollo
              </h3>

              <div className="flex items-center gap-5 mt-8">
                <button
                  className="w-8 h-8 rounded-full text-white text-xl font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#c75d7b" }}
                >
                  -
                </button>

                <span className="text-2xl font-semibold">1</span>

                <button
                  className="w-8 h-8 rounded-full text-white text-xl font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#c75d7b" }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <p className="text-2xl text-black">$6.00</p>
              <span className="text-2xl" style={{ color: "#9f4b68" }}>
                🗑
              </span>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="h-[180px] rounded-xl border border-gray-200 shadow-lg flex items-center px-12">
            <img
              src="/img/cart-product-2.png"
              alt="Producto 2"
              className="w-[130px] h-[140px] object-contain"
            />

            <div className="flex-1 ml-8">
              <p className="text-gray-400 font-bold uppercase">Alimento</p>

              <h3 className="text-black text-[17px] mt-4">
                Alimento Húmedo Cachorro Res
              </h3>

              <div className="flex items-center gap-5 mt-8">
                <button
                  className="w-8 h-8 rounded-full text-white text-xl font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#c75d7b" }}
                >
                  -
                </button>

                <span className="text-2xl font-semibold">1</span>

                <button
                  className="w-8 h-8 rounded-full text-white text-xl font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#c75d7b" }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <p className="text-2xl text-black">$6.00</p>
              <span className="text-2xl" style={{ color: "#9f4b68" }}>
                🗑
              </span>
            </div>
          </div>
        </div>

        {/* Resumen */}
        <div className="w-[430px] min-h-[690px] bg-white rounded-xl border border-gray-200 shadow-xl px-9 py-9">
          <h2 className="text-2xl font-medium text-black mb-7">
            Resumen del pedido
          </h2>

          <div className="space-y-5 text-[17px]">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-gray-400">$12.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Envío</span>
              <span className="text-gray-400">$3.50</span>
            </div>
          </div>

          <div
            className="w-full h-[2px] mt-12 mb-10"
            style={{ backgroundColor: pink }}
          ></div>

          <div className="space-y-5 text-[17px]">
            <div className="flex justify-between">
              <span className="text-gray-400">Total</span>
              <span className="text-gray-400">$15.50</span>
            </div>

            <p className="text-gray-400">Codigo de descuento</p>

            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Ingrese el codigo"
                className="w-[170px] h-[38px] rounded-md border-2 border-[#b88799] bg-[#f8dfe5] text-center text-gray-400 outline-none"
              />

              <button className="w-[110px] h-[38px] rounded-md border-2 border-[#b88799] bg-[#f8dfe5] text-gray-400">
                Aplicar
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
  <Link to="/domicilio">
    <button
      type="button"
      className="w-[245px] h-[44px] rounded-md text-white text-[17px] font-bold"
      style={{ backgroundColor: pink }}
    >
      Proceder con pago
    </button>
  </Link>

  <Link to="/">
    <button
      type="button"
      className="w-[245px] h-[42px] rounded-md bg-white text-[17px] font-bold border-2"
      style={{ borderColor: pink }}
    >
      Continuar comprando
    </button>
  </Link>
</div>

          <div className="mt-12 space-y-6 text-gray-300 text-[14px]">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 rounded-full bg-[#ffe8bf] flex items-center justify-center text-[#b88947]">
                ✓
              </span>
              <p>Envío gratuito en pedidos superiores a $50</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-6 h-6 rounded-full bg-[#ffe8bf] flex items-center justify-center text-[#b88947]">
                ↻
              </span>
              <p>Devoluciones fáciles en 30 días</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-6 h-6 rounded-full bg-[#ffe8bf] flex items-center justify-center text-[#b88947]">
                🔒
              </span>
              <p>Compra 100% segura y protegida</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-40 border-t border-black" />
    </div>
  );
}

export default Cart;