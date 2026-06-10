import { useState } from "react";

// ─── Datos de ejemplo ────────────────────────────────────────────────────────
const PRODUCTOS = [
  "Cama ortopédica para mascotas",
  "Collar reflectante ajustable",
  "Juguete interactivo dispensador",
  "Shampoo natural para perros",
  "Arena sanitaria premium para gatos",
  "Comedero automático programable",
  "Arnés antipresión",
  "Snacks dentales saludables",
];

const RESENAS_INICIALES = [
  {
    id: 1,
    nombre: "Carlos M.",
    producto: "Cama ortopédica para mascotas",
    estrellas: 5,
    titulo: "¡Mi Pitbull la adora!",
    descripcion:
      "Tengo un Pitbull que destruye todo en 5 minutos. Esta camita lleva dos semanas entera, lo cual es un récord mundial en esta casa. ¡Muy recomendada, completamente profesional!",
  },
  {
    id: 2,
    nombre: "Laura M.",
    producto: "Cama ortopédica para mascotas",
    estrellas: 5,
    titulo: "Perfecta para mi Golden",
    descripcion:
      "Compré la cama para mi Golden Retriever que ya no duerme bien y, sinceramente, ahora duerme mejor que yo. A veces me dan ganas de tirarme yo también. ¡10/10 sin consulta!",
  },
  {
    id: 3,
    nombre: "Diego R.",
    producto: "Juguete interactivo dispensador",
    estrellas: 5,
    titulo: "Mi gato por fin descansa",
    descripcion:
      "Mis cortinas ya no pueden descansar en paz. Al llevar la plataforma de arriba para jugarme a todo desde las alturas. Fácil de armar. ¡Muy recomendado!",
  },
  {
    id: 4,
    nombre: "Jamie S.",
    producto: "Arena sanitaria premium para gatos",
    estrellas: 5,
    titulo: "Las semillas llegaron fresquísimas",
    descripcion:
      "Se nota que las semillas son frescas y no pasan tanto polvo al fondo del tazón. Mi lorito se va tres veces de cabeza al comedero, lo sé desde la fontanería.",
  },
  {
    id: 5,
    nombre: "Elena V.",
    producto: "Collar reflectante ajustable",
    estrellas: 5,
    titulo: "A mi perico le encanta",
    descripcion:
      "A mi perico le encanta su reflejo, se pasa horas contemplándose en él. Ahora habla solo frente al espejo. El material es de muy buena calidad y muy detallado.",
  },
  {
    id: 6,
    nombre: "Ricardo F.",
    producto: "Comedero automático programable",
    estrellas: 5,
    titulo: "El acuario quedó genial",
    descripcion:
      "Lo de un lopon genial el acuario. Mis peces entran y salen de los castillitos al unísono. El material es muy resistente y el color de los adornos perfecto, muy detallado.",
  },
];

// ─── Componente de estrellas ──────────────────────────────────────────────────
function Estrellas({ valor, onChange, size = 18 }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onClick={() => onChange && onChange(n)}
          onMouseEnter={() => onChange && setHover(n)}
          onMouseLeave={() => onChange && setHover(0)}
          style={{
            fontSize: size,
            cursor: onChange ? "pointer" : "default",
            color: n <= (hover || valor) ? "#F4A261" : "#ddd",
            transition: "color 0.15s",
            userSelect: "none",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// ─── Avatar persona ───────────────────────────────────────────────────────────
function AvatarPersona({ nombre }) {
  const inicial = nombre?.[0]?.toUpperCase() || "?";
  const colores = ["#F4A261", "#E76F51", "#2A9D8F", "#E9C46A", "#264653", "#A8DADC"];
  const color = colores[nombre?.charCodeAt(0) % colores.length] || "#F4A261";
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: `${color}22`,
        border: `2px solid ${color}66`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill={color} />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill={color} opacity="0.6" />
      </svg>
    </div>
  );
}

// ─── Tarjeta de reseña ────────────────────────────────────────────────────────
function TarjetaResena({ resena }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "20px 22px",
        boxShadow: "0 2px 12px #f0b8c222",
        border: "1.5px solid #fce4ec",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 24px #f0b8c244";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 12px #f0b8c222";
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <AvatarPersona nombre={resena.nombre} />
        <div>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#333", fontFamily: "'Nunito', sans-serif" }}>
            {resena.nombre}
          </p>
          <Estrellas valor={resena.estrellas} size={14} />
        </div>
      </div>

      {/* Badge producto */}
      {resena.producto && (
        <span
          style={{
            display: "inline-block",
            background: "#fce4ec",
            color: "#c2185b",
            fontSize: 11,
            fontWeight: 600,
            borderRadius: 20,
            padding: "2px 10px",
            width: "fit-content",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: 0.3,
          }}
        >
          🐾 {resena.producto}
        </span>
      )}

      {/* Contenido */}
      <div>
        <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 14, color: "#444", fontFamily: "'Nunito', sans-serif" }}>
          {resena.titulo}
        </p>
        <p style={{ margin: 0, fontSize: 13, color: "#666", lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>
          "{resena.descripcion}"
        </p>
      </div>
    </div>
  );
}

// ─── Modal agregar reseña ─────────────────────────────────────────────────────
function ModalResena({ onCerrar, onGuardar }) {
  const [form, setForm] = useState({
    nombre: "",
    producto: "",
    estrellas: 0,
    titulo: "",
    descripcion: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleGuardar = () => {
    if (!form.nombre.trim() || form.estrellas === 0 || !form.descripcion.trim()) {
      setError("Por favor completa tu nombre, calificación y descripción.");
      return;
    }
    onGuardar({ ...form, id: Date.now() });
    setEnviado(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
        backdropFilter: "blur(3px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onCerrar()}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "36px 32px",
          width: "100%",
          maxWidth: 480,
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          position: "relative",
          animation: "modalIn 0.25s cubic-bezier(.34,1.56,.64,1)",
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Pacifico&display=swap');
          @keyframes modalIn { from { opacity:0; transform:scale(0.92) translateY(16px) } to { opacity:1; transform:scale(1) translateY(0) } }
        `}</style>

        {/* Cerrar */}
        <button
          onClick={onCerrar}
          style={{
            position: "absolute",
            top: 16,
            right: 18,
            background: "none",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            color: "#aaa",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {enviado ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>🐾</div>
            <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#e91e8c", margin: "0 0 8px" }}>
              ¡Gracias por tu reseña!
            </h3>
            <p style={{ color: "#888", fontFamily: "'Nunito', sans-serif" }}>
              Tu opinión ayuda a otros padres de mascotas.
            </p>
            <button
              onClick={onCerrar}
              style={{
                marginTop: 16,
                background: "linear-gradient(135deg, #f06292, #e91e8c)",
                color: "#fff",
                border: "none",
                borderRadius: 30,
                padding: "12px 32px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2
              style={{
                margin: "0 0 6px",
                fontFamily: "'Pacifico', cursive",
                fontSize: 22,
                color: "#e91e8c",
              }}
            >
              Mi reseña
            </h2>
            <p style={{ margin: "0 0 24px", color: "#999", fontSize: 13, fontFamily: "'Nunito', sans-serif" }}>
              Cuéntanos tu experiencia con Puppy Love Shop 🐶
            </p>

            {/* Calificación */}
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Calificación general *</label>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Estrellas valor={form.estrellas} onChange={(v) => setForm({ ...form, estrellas: v })} size={28} />
                {form.estrellas === 0 && (
                  <span style={{ color: "#ccc", fontSize: 13, fontFamily: "'Nunito', sans-serif" }}>
                    Haz clic para calificar
                  </span>
                )}
              </div>
            </div>

            {/* Nombre */}
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Tu nombre *</label>
              <input
                type="text"
                placeholder="Ej. María G."
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Producto opcional */}
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>
                Producto (opcional){" "}
                <span style={{ color: "#bbb", fontWeight: 400, fontSize: 11 }}>— ¿A qué producto calificás?</span>
              </label>
              <select
                value={form.producto}
                onChange={(e) => setForm({ ...form, producto: e.target.value })}
                style={{ ...inputStyle, color: form.producto ? "#333" : "#aaa" }}
              >
                <option value="">Seleccionar producto...</option>
                {PRODUCTOS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Título */}
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Título de la reseña</label>
              <input
                type="text"
                placeholder="Ej. ¡Mi perro la adora!"
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Descripción */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Descripción *</label>
              <textarea
                placeholder="Cuéntanos tu experiencia..."
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
              />
            </div>

            {error && (
              <p style={{ color: "#e91e8c", fontSize: 13, margin: "-12px 0 14px", fontFamily: "'Nunito', sans-serif" }}>
                ⚠️ {error}
              </p>
            )}

            <button
              onClick={handleGuardar}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #f06292, #e91e8c)",
                color: "#fff",
                border: "none",
                borderRadius: 30,
                padding: "14px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
                letterSpacing: 0.3,
                boxShadow: "0 4px 16px #e91e8c44",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Enviar reseña 🐾
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Estilos compartidos ──────────────────────────────────────────────────────
const labelStyle = {
  display: "block",
  marginBottom: 6,
  fontSize: 13,
  fontWeight: 700,
  color: "#555",
  fontFamily: "'Nunito', sans-serif",
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1.5px solid #fce4ec",
  borderRadius: 10,
  fontSize: 14,
  fontFamily: "'Nunito', sans-serif",
  color: "#333",
  outline: "none",
  background: "#fff9fb",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

// ─── Página principal de Reseñas ──────────────────────────────────────────────
export default function ResenasPage() {
  const [resenas, setResenas] = useState(RESENAS_INICIALES);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [filtroProducto, setFiltroProducto] = useState("");

  const handleGuardar = (nueva) => {
    setResenas((prev) => [nueva, ...prev]);
    setTimeout(() => setModalAbierto(false), 1800);
  };

  const resenasFiltradas = resenas.filter((r) => {
    const texto = `${r.nombre} ${r.titulo} ${r.descripcion}`.toLowerCase();
    const matchBusqueda = texto.includes(busqueda.toLowerCase());
    const matchProducto = !filtroProducto || r.producto === filtroProducto;
    return matchBusqueda && matchProducto;
  });

  const promedioEstrellas =
    resenas.length > 0
      ? (resenas.reduce((s, r) => s + r.estrellas, 0) / resenas.length).toFixed(1)
      : 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Pacifico&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #fff9fb; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#fff9fb", fontFamily: "'Nunito', sans-serif" }}>
        {/* ── Hero banner ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 60%, #f48fb1 100%)",
            padding: "52px 24px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorativos */}
          <div style={{ position: "absolute", top: -30, left: -30, width: 160, height: 160, borderRadius: "50%", background: "#f06292", opacity: 0.08 }} />
          <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "#e91e8c", opacity: 0.1 }} />

          <p style={{ margin: "0 0 6px", color: "#e91e8c", fontWeight: 800, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>
            Puppy Love Shop
          </p>
          <h1 style={{ margin: "0 0 10px", fontFamily: "'Pacifico', cursive", fontSize: "clamp(26px, 5vw, 40px)", color: "#c2185b", lineHeight: 1.2 }}>
            Reseñas de dueños de mascotas
          </h1>
          <p style={{ margin: "0 auto 24px", maxWidth: 540, color: "#ad1457", fontSize: 15, lineHeight: 1.6 }}>
            ¡Consulta a continuación las reseñas reales escritas por padres de mascotas cariñosos como tú!
          </p>

          {/* Promedio */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 40, padding: "10px 24px", boxShadow: "0 4px 20px #f0b8c233" }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#e91e8c", fontFamily: "'Pacifico', cursive" }}>{promedioEstrellas}</span>
            <Estrellas valor={Math.round(promedioEstrellas)} size={20} />
            <span style={{ color: "#aaa", fontSize: 13 }}>({resenas.length} reseñas)</span>
          </div>

          {/* Botón escribir */}
          <div style={{ marginTop: 24 }}>
            <button
              onClick={() => setModalAbierto(true)}
              style={{
                background: "linear-gradient(135deg, #f06292, #e91e8c)",
                color: "#fff",
                border: "none",
                borderRadius: 30,
                padding: "13px 32px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 4px 20px #e91e8c55",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 8px 28px #e91e8c66"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px #e91e8c55"; }}
            >
              ✏️ Escribir una reseña
            </button>
          </div>
        </div>

        {/* ── Filtros ── */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px 0" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="🔍 Buscar reseña..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                flex: 1,
                minWidth: 200,
                padding: "10px 16px",
                border: "1.5px solid #fce4ec",
                borderRadius: 30,
                fontSize: 14,
                background: "#fff",
                fontFamily: "'Nunito', sans-serif",
                outline: "none",
                color: "#444",
              }}
            />
            <select
              value={filtroProducto}
              onChange={(e) => setFiltroProducto(e.target.value)}
              style={{
                padding: "10px 16px",
                border: "1.5px solid #fce4ec",
                borderRadius: 30,
                fontSize: 14,
                background: "#fff",
                fontFamily: "'Nunito', sans-serif",
                color: filtroProducto ? "#333" : "#aaa",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="">Todos los productos</option>
              {PRODUCTOS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Grid de reseñas ── */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "28px 24px 60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: 20,
          }}
        >
          {resenasFiltradas.length > 0 ? (
            resenasFiltradas.map((r) => <TarjetaResena key={r.id} resena={r} />)
          ) : (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 0", color: "#ccc" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🐾</div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16 }}>No se encontraron reseñas</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal ── */}
      {modalAbierto && (
        <ModalResena onCerrar={() => setModalAbierto(false)} onGuardar={handleGuardar} />
      )}
    </>
  );
}