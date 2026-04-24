import { Link } from "react-router";

function Category() {
  const pink = "#E86D87";

  return (
    <div className="w-full min-h-screen bg-white px-16 py-6 font-sans">
      <div className="flex gap-20">
        {/* SIDEBAR */}
        <aside className="w-[190px]">
          <div className="flex items-center gap-2 text-[17px] mb-6">
            <Link to="/">
              <span style={{ color: pink }}>Inicio</span>
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-400">Perros</span>
          </div>

          <div className="inline-block bg-[#f9dce4] px-4 py-2 text-[14px] text-gray-400 mb-6">
            Perros ×
          </div>

          <h3 className="text-[17px] font-semibold text-black mb-4">
            Categoria
          </h3>

          <ul className="space-y-3 text-[14px] text-black">
            <li>Alimento</li>
            <li>Juguetes</li>
            <li>Farmapet</li>
            <li>Accesorios</li>
            <li>Cuidado E Higiene</li>
            <li>Snacks</li>
            <li>Marcas Exclusivas</li>
          </ul>
        </aside>

        {/* CONTENIDO */}
        <main className="flex-1">
          <h1 className="text-3xl font-semibold text-black mt-10">
            Tienda para perros: alimentos, accesorios y más
          </h1>

          <p className="text-gray-400 text-[15px] mt-3 max-w-[780px] leading-5">
            El mundo entero de tu perro está aquí. Descubre la más amplia
            variedad de alimentos, snacks, juguetes, medicinas y accesorios
            pensados para su bienestar y felicidad.
          </p>

          {/* PRODUCTOS */}
          <div className="grid grid-cols-3 gap-x-12 gap-y-12 mt-10 max-w-[980px]">
            {/* Producto 1 */}
            <div className="w-[260px] h-[390px] bg-white rounded-lg border border-gray-300 shadow-lg mx-auto px-7 py-7 flex flex-col">
              <img
                src="/img/dog-product-1.png"
                alt="Producto 1"
                className="w-full h-[180px] object-contain"
              />

              <h3 className="text-[13px] font-semibold text-black leading-tight mt-5">
                Churu - Inaba Dog Spark 4 Piezas Chicken With Salmon
              </h3>

              <p className="text-[13px] mt-2" style={{ color: pink }}>
                $16.00
              </p>

              <button
                className="w-full h-[42px] rounded-md text-white text-[13px] font-bold mt-auto"
                style={{ backgroundColor: pink }}
              >
                Agregar al carrito
              </button>
            </div>

            {/* Producto 2 */}
            <div className="w-[260px] h-[390px] bg-white rounded-lg border border-gray-300 shadow-lg mx-auto px-7 py-7 flex flex-col">
              <img
                src="/img/dog-product-2.png"
                alt="Producto 2"
                className="w-full h-[180px] object-contain"
              />

              <h3 className="text-[13px] font-semibold text-black leading-tight mt-5">
                Collarazo Pets - Bozal Rinoceronte
              </h3>

              <p className="text-[13px] mt-2" style={{ color: pink }}>
                $10.00
              </p>

              <button
                className="w-full h-[42px] rounded-md text-white text-[13px] font-bold mt-auto"
                style={{ backgroundColor: pink }}
              >
                Agregar al carrito
              </button>
            </div>

            {/* Producto 3 */}
            <div className="w-[260px] h-[390px] bg-white rounded-lg border border-gray-300 shadow-lg mx-auto px-7 py-7 flex flex-col">
              <img
                src="/img/dog-product-3.png"
                alt="Producto 3"
                className="w-full h-[180px] object-contain"
              />

              <h3 className="text-[13px] font-semibold text-black leading-tight mt-5">
                Hills Pd Metabolic - Alimento Perro Mantenimiento Peso Sabor Pollo
              </h3>

              <p className="text-[13px] mt-2" style={{ color: pink }}>
                $25.00
              </p>

              <button
                className="w-full h-[42px] rounded-md text-white text-[13px] font-bold mt-auto"
                style={{ backgroundColor: pink }}
              >
                Agregar al carrito
              </button>
            </div>

            {/* Producto 4 */}
            <div className="w-[260px] h-[390px] bg-white rounded-lg border border-gray-300 shadow-lg mx-auto px-7 py-7 flex flex-col">
              <img
                src="/img/dog-product-4.png"
                alt="Producto 4"
                className="w-full h-[180px] object-contain"
              />

              <h3 className="text-[13px] font-semibold text-black leading-tight mt-5">
                Churu - Inaba Dog Bites Chicken Recipe Wraps with Salmon Recipe
              </h3>

              <p className="text-[13px] mt-2" style={{ color: pink }}>
                $20.00
              </p>

              <button
                className="w-full h-[42px] rounded-md text-white text-[13px] font-bold mt-auto"
                style={{ backgroundColor: pink }}
              >
                Agregar al carrito
              </button>
            </div>

            {/* Producto 5 */}
            <div className="w-[260px] h-[390px] bg-white rounded-lg border border-gray-300 shadow-lg mx-auto px-7 py-7 flex flex-col">
              <img
                src="/img/dog-product-5.png"
                alt="Producto 5"
                className="w-full h-[180px] object-contain"
              />

              <h3 className="text-[13px] font-semibold text-black leading-tight mt-5">
                Churu - Receta de Wraps de Pollo con Salmón y Bocados de Perro Inaba
              </h3>

              <p className="text-[13px] mt-2" style={{ color: pink }}>
                $15.00
              </p>

              <button
                className="w-full h-[42px] rounded-md text-white text-[13px] font-bold mt-auto"
                style={{ backgroundColor: pink }}
              >
                Agregar al carrito
              </button>
            </div>

            {/* Producto 6 */}
            <div className="w-[260px] h-[390px] bg-white rounded-lg border border-gray-300 shadow-lg mx-auto px-7 py-7 flex flex-col">
              <img
                src="/img/dog-product-6.png"
                alt="Producto 6"
                className="w-full h-[180px] object-contain"
              />

              <h3 className="text-[13px] font-semibold text-black leading-tight mt-5">
                Paw Day - Peluche de zombi duradero de primera calidad
              </h3>

              <p className="text-[13px] mt-2" style={{ color: pink }}>
                $8.25
              </p>

              <button
                className="w-full h-[42px] rounded-md text-white text-[13px] font-bold mt-auto"
                style={{ backgroundColor: pink }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Category;