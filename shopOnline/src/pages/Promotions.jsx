import { Link } from "react-router";

function Promotions() {
  const pink = "#E86D87";

  const products = [
    {
      img: "/img/promo-product-1.png",
      title: "Paté - Dieta Horneada Carne De Res",
      price: "$20.00",
    },
    {
      img: "/img/promo-product-2.png",
      title: "Br For Cat - Adulto",
      price: "$20.00",
    },
    {
      img: "/img/promo-product-3.png",
      title: "Coastal Pet - Perro Bozal Basket",
      price: "$4.00",
    },
    {
      img: "/img/promo-product-4.png",
      title: "Jaula TK10 Grand Espacio para pájaro",
      price: "$25.99",
    },
    {
      img: "/img/promo-product-5.png",
      title: "Littleone conejo sin alimento para cone silvestre",
      price: "$35.00",
    },
    {
      img: "/img/promo-product-6.png",
      title: "Limpiador de Raspador de Algas con Mango Largo",
      price: "$7.00",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white px-16 py-6 font-sans">
      <div className="flex gap-20">
        {/* SIDEBAR */}
        <aside className="w-[190px]">
          <div className="flex items-center gap-2 text-[17px] mb-8">
            <Link to="/">
              <span style={{ color: pink }}>Inicio</span>
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-400">Promociones</span>
          </div>

          <h3 className="text-[17px] font-semibold text-black mb-5">
            Mascotas
          </h3>

          <ul className="space-y-4 text-[15px] text-gray-500">
            <li>Perro</li>
            <li>Gato</li>
            <li>Pájaros</li>
            <li>Peces</li>
          </ul>
        </aside>

        {/* PRODUCTOS */}
        <main className="flex-1">
          <div className="grid grid-cols-3 gap-x-16 gap-y-24 max-w-[980px]">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative w-[270px] h-[410px] bg-white rounded-lg border border-gray-300 shadow-lg px-8 py-8 flex flex-col"
              >
                {/* ETIQUETA OFERTA */}
                <div className="absolute top-0 left-0 w-[105px] h-[32px] bg-[#FFE5BB] rounded-br-lg rounded-tl-lg flex items-center justify-center">
                  <span className="text-[13px] font-bold text-black">
                    OFERTA
                  </span>
                </div>

                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[190px] object-contain mt-6"
                />

                <h3 className="text-[15px] font-semibold text-black leading-tight mt-5 min-h-[45px]">
                  {product.title}
                </h3>

                <p className="text-[15px] mt-2" style={{ color: pink }}>
                  {product.price}
                </p>

                <button
                  className="w-full h-[44px] rounded-md text-white text-[15px] font-bold mt-auto"
                  style={{ backgroundColor: pink }}
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Promotions;