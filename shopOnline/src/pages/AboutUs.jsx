import { Link } from "react-router";

export default function AboutUs() {
  return (
    <>
      <style>{`
        
        

        .aboutus-container * { box-sizing: border-box; }

        .aboutus-container {
          font-family: 'Nunito', sans-serif;
          background: #fff9fb;
          min-height: 100vh;
          padding-bottom: 48px;
        }

        /* Breadcrumb */
        .breadcrumb {
          padding: 14px 32px;
          font-size: 13px;
          color: #aaa;
        }
        .breadcrumb a {
          color: #aaa;
          text-decoration: none;
        }
        .breadcrumb a:hover { color: #e91e8c; }
        .breadcrumb span { margin: 0 6px; }

        /* Contenido principal */
        .about-content {
          max-width: 860px;
          margin: 0 auto;
          padding: 10px 32px 0;
        }

        .about-label {
          text-align: center;
          font-size: 15px;
          color: #888;
          margin: 0 0 4px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .about-brand {
          text-align: center;
          font-family: 'Pacifico', cursive;
          font-size: clamp(22px, 4vw, 32px);
          color: #e91e8c;
          margin: 0 0 32px;
          letter-spacing: 1px;
        }

        /* Sección historia */
        .historia-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          margin-bottom: 40px;
        }

        @media (max-width: 620px) {
          .historia-grid { grid-template-columns: 1fr; }
          .about-content { padding: 10px 20px 0; }
          .breadcrumb { padding: 12px 20px; }
        }

        .historia-img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 8px 28px rgba(233,30,140,0.12);
        }

        .historia-texto h2 {
          font-size: clamp(17px, 2.5vw, 22px);
          font-weight: 800;
          color: #333;
          margin: 0 0 16px;
          line-height: 1.35;
        }

        .historia-texto p {
          font-size: 14.5px;
          color: #555;
          line-height: 1.75;
          margin: 0 0 14px;
        }

        /* Separador */
        .divider {
          border: none;
          border-top: 1.5px solid #fce4ec;
          margin: 0 0 28px;
        }

        /* Quote */
        .quote-block {
          text-align: center;
          padding: 10px 16px;
        }

        .quote-block blockquote {
          font-size: clamp(15px, 2.5vw, 19px);
          font-weight: 700;
          color: #333;
          font-style: italic;
          line-height: 1.6;
          margin: 0;
          max-width: 680px;
          display: inline-block;
        }

        .quote-block blockquote::before { content: '"'; color: #f06292; }
        .quote-block blockquote::after  { content: '"'; color: #f06292; }
      `}</style>

      <div className="aboutus-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>›</span>
          <span style={{ color: "#555" }}>Nosotros</span>
        </nav>

        <div className="about-content">
          <p className="about-label">Sobre nosotros</p>
          <h1 className="about-brand">PUPPY LOVE SHOP</h1>

          {/* Historia */}
          <div className="historia-grid">
            <img
              src="/assets/about-pets.jpg"
              alt="Nuestras mascotas"
              className="historia-img"
              onError={(e) => {
                // Fallback si no existe la imagen
                e.currentTarget.style.background = "linear-gradient(135deg, #fce4ec, #f8bbd0)";
                e.currentTarget.style.minHeight = "280px";
                e.currentTarget.removeAttribute("src");
              }}
            />

            <div className="historia-texto">
              <h2>Nuestra Historia: Donde todo empezó con un lengüetazo</h2>
              <p>
                En Puppy Love Shop, creemos que las mascotas no son solo animales de compañía;
                son los mejores amigos, los confidentes silenciosos y los miembros más
                consentidos de la familia.
              </p>
              <p>
                Nuestra tienda nació de esa sensación única que tienes cuando llegas a casa y te
                recibe con la cola agitada, un ronroneo suave o un trino alegre. Queríamos crear
                un espacio donde cada dueño pudiera encontrar no solo calidad, sino ese "algo
                especial" que le dice a tu mascota cuánto la amas. Desde el juguete más
                resistente hasta el rascador más cómodo, cada producto en nuestro estante ha
                sido elegido pensando en su bienestar y en su felicidad.
              </p>
            </div>
          </div>

          {/* Divider + Quote */}
          <hr className="divider" />

          <div className="quote-block">
            <blockquote>
              Porque ellos nos dan su amor incondicional todos los días, en Puppy Love Shop
              trabajamos para que tú puedas devolvérselo con lo mejor
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}