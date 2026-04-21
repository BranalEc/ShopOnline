const CategoryCard = ({ category }) => {
  return (
    // Parte 1: contenedor principal de la tarjeta
    <div className="flex flex-col items-center">
      {/* Parte 2: caja donde va la imagen */}
      <div
        className="w-[170px] h-[170px] rounded-[22px] border-2 border-[#d8cfcf] flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: category.bgColor || "#f5f5f5" }}
      >
        {/* Parte 3: imagen de la categoría */}
        <img
          className="w-[110px] h-[110px] object-contain"
          src={category.image}
          alt={category.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              "https://via.placeholder.com/200x200?text=Imagen+no+disponible";
          }}
        />
      </div>

      {/* Parte 4: nombre de la categoría */}
      <h2 className="mt-3 text-[28px] font-medium text-[#222]">
        {category.name}
      </h2>
    </div>
  );
};

export default CategoryCard;