import { useState } from "react";
import { Link } from "react-router";

function LastPayment() {
  const pink = "#E86D87";
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white px-20 py-12 font-sans relative">
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
            Por favor revise su pedido
          </h1>

          {/* DETALLES DEL PEDIDO */}
          <div className="w-[650px] mt-6">
            {/* ENTREGA */}
            <div className="border-t border-gray-100 border-b py-5 flex justify-between">
              <div>
                <p className="text-[14px] font-bold text-black">
                  Entrega exprés a domicilio
                </p>
                <p className="text-[14px] text-black mt-2">
                  Recíbelo entre el lunes 16 y el martes 17
                </p>
                <p className="text-[14px] font-bold text-black mt-2">
                  32,99 €
                </p>
              </div>

              <Link to="/domicilio">
                <button className="text-[14px] font-bold text-black">
                  Editar
                </button>
              </Link>
            </div>

            {/* DIRECCIÓN */}
            <div className="border-b border-gray-100 py-5 flex justify-between">
              <div>
                <p className="text-[14px] font-bold text-black">
                  Calle A Quezaltepeque
                </p>
                <p className="text-[14px] text-black mt-2">
                  Casa 10 Nejapa, San Salvador
                </p>
                <p className="text-[14px] text-black mt-2">
                  Génesis Moya +503 71526223
                </p>
                <p className="text-[14px] text-black mt-2">El Salvador</p>
              </div>

              <Link to="/domicilio">
                <button className="text-[14px] font-bold text-black">
                  Editar
                </button>
              </Link>
            </div>

            {/* PAGO */}
            <div className="border-b border-gray-100 py-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-[45px] h-[30px] border border-black flex items-center justify-center text-blue-600 font-bold">
                    P
                  </div>
                  <p className="text-[14px] font-bold text-black">PayPal</p>
                </div>

                <Link to="/payment">
                  <button className="text-[14px] font-bold text-black">
                    Editar
                  </button>
                </Link>
              </div>

              <p className="text-[12px] text-gray-400 mt-5">
                Serás redirigido al sitio web de Paypal donde podrás completar el pago.
              </p>
            </div>

            {/* OPCIONES */}
            <div className="border-b border-gray-100 py-7 space-y-7">
              <label className="flex items-center gap-5 cursor-pointer">
                <input type="checkbox" className="hidden" />
                <span
                  className="w-7 h-7 rounded-full"
                  style={{ backgroundColor: "#c75d7b" }}
                ></span>
                <span className="text-[13px] text-black">
                  Solicitar factura
                </span>
              </label>

              <label className="flex items-start gap-5 cursor-pointer">
                <input type="checkbox" className="hidden" />
                <span
                  className="w-7 h-7 rounded-full mt-1"
                  style={{ backgroundColor: "#c75d7b" }}
                ></span>
                <span className="text-[13px] text-black leading-5">
                  He leído y acepto las{" "}
                  <b>Condiciones de Compra</b> y entiendo la información sobre el
                  uso de mis datos personales explicada en la{" "}
                  <b>Política de Privacidad.</b>
                </span>
              </label>
            </div>
          </div>

          {/* BOTONES */}
          <div className="flex items-center justify-between mt-12 w-[650px]">
            <Link to="/payment">
              <button
                type="button"
                className="flex items-center gap-3 text-black text-[15px]"
              >
                <span className="text-gray-400 text-2xl">‹</span>
                Volver al método de pago
              </button>
            </Link>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="w-[255px] h-[60px] rounded-md text-white text-[17px] font-bold leading-5"
              style={{ backgroundColor: pink }}
            >
              Pagar y procesar su pedido
            </button>
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

      <hr className="mt-40 border-t border-black" />

      {/* MODAL PAGO EXITOSO */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="w-[380px] h-[430px] bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-black mb-14">
              Pago exitoso
            </h2>

            <div
              className="w-[160px] h-[160px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#a95682" }}
            >
              <span className="text-white text-8xl leading-none">✓</span>
            </div>

            <Link to="/">
              <button
                type="button"
                className="mt-12 w-[180px] h-[42px] rounded-md text-white text-[16px] font-bold"
                style={{ backgroundColor: pink }}
              >
                Finalizar
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default LastPayment;