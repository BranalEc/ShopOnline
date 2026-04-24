function Home() {
  const pink = "#E86D87";

  return (
    <div className="w-full bg-white font-sans">
      {/* HERO */}
      <section className="w-full">
        <div className="w-full h-[330px] bg-[#fde9ef] overflow-hidden">
          <img
            src="/img/banner-pets.png"
            alt="Make your pet happy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="px-12 mt-12">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-2xl bg-[#f7dce4] border border-[#e3b8c4] flex items-center justify-center">
              <img
                src="/img/gato.png"
                alt="Gatos"
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <p className="mt-4 text-lg font-bold text-black">Gatos</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-2xl bg-[#d9eef9] border border-[#b7d4e2] flex items-center justify-center">
              <img
                src="/img/perro.png"
                alt="Perros"
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <p className="mt-4 text-lg font-bold text-black">Perros</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-2xl bg-[#fffbea] border border-[#e9dfb7] flex items-center justify-center">
              <img
                src="/img/pajaro.png"
                alt="Pájaros"
                className="w-[210px] h-[200px] object-contain"
              />
            </div>
            <p className="mt-4 text-lg font-bold text-black">Pájaros</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-2xl bg-[#ffedc8] border border-[#e6c98f] flex items-center justify-center">
              <img
                src="/img/pez.png"
                alt="Peces"
                className="w-[210px] h-[200px] object-contain"
              />
            </div>
            <p className="mt-4 text-lg font-bold text-black">Peces</p>
          </div>
        </div>

        <hr className="mt-12 border-t border-black" />
      </section>

      {/* OFERTAS */}
      <section className="px-12 mt-12">
        <h2 className="text-3xl font-bold text-black text-center mb-5">
          Ofertas destacadas de la semana
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="h-[155px] bg-[#d7edf7] rounded-sm overflow-hidden">
            <img
              src="/img/oferta-1.png"
              alt="Oferta 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[155px] bg-[#d7edf7] rounded-sm overflow-hidden">
            <img
              src="/img/oferta-2.png"
              alt="Oferta 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[155px] bg-[#d7edf7] rounded-sm overflow-hidden">
            <img
              src="/img/oferta-3.png"
              alt="Oferta 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAVORITOS */}
<section className="px-12 mt-16">
  <h2 className="text-4xl font-bold text-black text-center mb-8">
    Favoritos Puppy
  </h2>

  <div className="grid grid-cols-3 gap-12 px-16">
    {/* Producto 1 */}
    <div className="w-[310px] min-h-[470px] bg-white rounded-md border border-gray-300 shadow-lg mx-auto flex flex-col items-center px-8 py-8">
      <img
        src="/img/producto-1.png"
        alt="Producto 1"
        className="w-[220px] h-[220px] object-contain mb-7"
      />

      <div className="w-full">
        <h3 className="text-[18px] font-semibold leading-tight text-black text-center">
          Kantal - Huesos Masticables Medianos Mixto Sabores
        </h3>

        <p
          className="text-[18px] mt-4 text-center font-medium"
          style={{ color: pink }}
        >
          $25.00
        </p>
      </div>

      <button
        className="w-full mt-auto py-4 rounded-md text-white text-[17px] font-semibold"
        style={{ backgroundColor: pink }}
      >
        Agregar al carrito
      </button>
    </div>

    {/* Producto 2 */}
    <div className="w-[310px] min-h-[470px] bg-white rounded-md border border-gray-300 shadow-lg mx-auto flex flex-col items-center px-8 py-8">
      <img
        src="/img/producto-2.png"
        alt="Producto 2"
        className="w-[220px] h-[220px] object-contain mb-7"
      />

      <div className="w-full">
        <h3 className="text-[18px] font-semibold leading-tight text-black text-center">
          Hikari peces de granel pequeños
        </h3>

        <p
          className="text-[18px] mt-4 text-center font-medium"
          style={{ color: pink }}
        >
          $28.75
        </p>
      </div>

      <button
        className="w-full mt-auto py-4 rounded-md text-white text-[17px] font-semibold"
        style={{ backgroundColor: pink }}
      >
        Agregar al carrito
      </button>
    </div>

    {/* Producto 3 */}
    <div className="w-[310px] min-h-[470px] bg-white rounded-md border border-gray-300 shadow-lg mx-auto flex flex-col items-center px-8 py-8">
      <img
        src="/img/producto-3.png"
        alt="Producto 3"
        className="w-[220px] h-[220px] object-contain mb-7"
      />

      <div className="w-full">
        <h3 className="text-[18px] font-semibold leading-tight text-black text-center">
          Tetra Goldfish comida en copos para peces
        </h3>

        <p
          className="text-[18px] mt-4 text-center font-medium"
          style={{ color: pink }}
        >
          $18.50
        </p>
      </div>

      <button
        className="w-full mt-auto py-4 rounded-md text-white text-[17px] font-semibold"
        style={{ backgroundColor: pink }}
      >
        Agregar al carrito
      </button>
    </div>
  </div>
</section>

      {/* APP BANNER */}
      <section className="px-16 mt-24 mb-12">
        <div className="w-full h-[220px] rounded-md overflow-hidden bg-[#f4d6df]">
          <img
            src="/img/app-banner.png"
            alt="Descarga la app"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;