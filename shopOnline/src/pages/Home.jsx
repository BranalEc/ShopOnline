import { useState, useEffect } from "react";
import HomeAnimals from "../components/HomeAnimals";
function Home() {
    return(
        <main className="container mx-auto flex h-screen flex-col items-center justify-center p-4 w-full">
            <h1 className='text-center'>Home</h1>
            <p>Proyecto consumiendo API's externas.</p>
        </main>

    );
}

const HomeAnimales = () => {
    const apiUrl = "https://api.thedogapi.com/v1/breeds";
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAnimals = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setAnimals(Array.isArray(data.items) ? data.items : []); // Asegura que data sea un array
        }
        catch (error) {
            console.error("Error fetching animals:", error);           
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAnimals();
    }, []);

    return (
        <div className="w-full px-10 py-8">
      {/* Parte 2: contenedor de las tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            {/* Parte 3: caja de la imagen */}
            <div
              className="w-[170px] h-[170px] rounded-[22px] border-2 border-[#d8cfcf] flex items-center justify-center"
              style={{ backgroundColor: category.bgColor }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-[110px] h-[110px] object-contain"
              />
            </div>

            {/* Parte 4: nombre de la categoría */}
            <p className="mt-3 text-[28px] font-medium text-[#222]">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* Parte 5: línea inferior */}
      <div className="w-full border-t-2 border-[#999393] mt-8"></div>
    </div>
    );
}


export default Home;