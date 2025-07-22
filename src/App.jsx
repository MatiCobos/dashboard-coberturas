import React, { useState, useEffect } from "react";
import { coberturasIniciales } from "./data/data";

// Función para calcular el estado según checklist
const calcularEstado = (checklist) => {
  if (!checklist || checklist.length === 0) return "Incompleto";
  const todosCompletos = checklist.every((item) => item.completo);
  const algunoCompleto = checklist.some((item) => item.completo);
  if (todosCompletos) return "Completo";
  if (algunoCompleto) return "En proceso";
  return "Incompleto";
};

// Obtener desde localStorage o usar datos iniciales, y recalcular estado
const obtenerCoberturasGuardadas = () => {
  const guardadas = localStorage.getItem("coberturas");
  if (guardadas) {
    try {
      const parsed = JSON.parse(guardadas);
      if (
        !Array.isArray(parsed) ||
        parsed.length === 0 ||
        !parsed[0].checklist
      ) {
        return coberturasIniciales.map((c) => ({
          ...c,
          estado: calcularEstado(c.checklist),
        }));
      }
      return parsed.map((c) => ({
        ...c,
        estado: calcularEstado(c.checklist),
      }));
    } catch (e) {
      return coberturasIniciales.map((c) => ({
        ...c,
        estado: calcularEstado(c.checklist),
      }));
    }
  }
  return coberturasIniciales.map((c) => ({
    ...c,
    estado: calcularEstado(c.checklist),
  }));
};

function App() {
  const [coberturas, setCoberturas] = useState(obtenerCoberturasGuardadas);
  const [filtro, setFiltro] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  useEffect(() => {
    localStorage.setItem("coberturas", JSON.stringify(coberturas));
  }, [coberturas]);

  const coberturasOrdenadas = [...coberturas].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  const coberturasFiltradas = coberturasOrdenadas.filter((c) => {
    const coincideNombre = filtro === "" || c.nombre === filtro;
    const coincideEstado = filtroEstado === "" || c.estado === filtroEstado;
    return coincideNombre && coincideEstado;
  });

  const togglePaso = (coberturaId, pasoIndex) => {
    setCoberturas((prev) =>
      prev.map((cobertura) => {
        if (cobertura.id === coberturaId) {
          const checklistActualizado = cobertura.checklist.map((item, idx) => {
            if (idx === pasoIndex) {
              return { ...item, completo: !item.completo };
            }
            return item;
          });

          const nuevoEstado = calcularEstado(checklistActualizado);

          return {
            ...cobertura,
            checklist: checklistActualizado,
            estado: nuevoEstado,
          };
        }
        return cobertura;
      })
    );
  };

  const limpiarTodo = () => {
    if (
      window.confirm(
        "¿Estás seguro que querés limpiar todo? Esta acción no se puede deshacer."
      )
    ) {
      const coberturasReiniciadas = coberturas.map((c) => ({
        ...c,
        estado: "Incompleto",
        checklist: c.checklist.map((item) => ({
          ...item,
          completo: false,
        })),
      }));
      setCoberturas(coberturasReiniciadas);
    }
  };

  return (
    <div className="container">
      {/* HEADER CON LOGO Y TÍTULO */}
      <div className="header">
        <img src="./logo.png" alt="Logo Empresa" className="logo" />
        <h1>Dashboard de Gestión de Coberturas</h1>
      </div>

      {/* Menús desplegables y botón */}
      <div className="controls between">
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="select-cobertura"
            aria-label="Seleccionar cobertura"
          >
            <option value="">Mostrar todas</option>
            {coberturasOrdenadas.map(({ id, nombre }) => (
              <option key={id} value={nombre}>
                {nombre}
              </option>
            ))}
          </select>

          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="select-cobertura"
            aria-label="Filtrar por estado"
          >
            <option value="">Todos los estados</option>
            <option value="Completo">✅ Completo</option>
            <option value="En proceso">⏳ En proceso</option>
            <option value="Incompleto">❌ Incompleto</option>
          </select>
        </div>

        <button onClick={limpiarTodo}>Limpiar todo</button>
      </div>

      {/* TARJETAS */}
      {coberturasFiltradas.length === 0 ? (
        <p>No hay coberturas para mostrar.</p>
      ) : (
        coberturasFiltradas.map(
          ({ id, nombre, estado, notas, checklist, detalles }) => (
            <div key={id} className="cobertura-card">
              <h2>{nombre}</h2>

              <div className="estado-checklist-line">
                <p>
                  <b>Estado:</b>{" "}
                  <span
                    className={`estado ${
                      estado === "Completo"
                        ? "estado-completo"
                        : estado === "En proceso"
                        ? "estado-en-proceso"
                        : "estado-incompleto"
                    }`}
                  >
                    {estado === "Completo"
                      ? "✅ Completo"
                      : estado === "En proceso"
                      ? "⏳ En proceso"
                      : "❌ Incompleto"}
                  </span>
                </p>

                <div className="seccion seccion-checklist">
                  <h3>Checklist</h3>
                  <ul>
                    {checklist.map(({ paso, completo }, index) => (
                      <li key={index}>
                        <label>
                          <input
                            type="checkbox"
                            checked={completo}
                            onChange={() => togglePaso(id, index)}
                          />
                          {paso}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {detalles && (
                <div className="seccion seccion-detalles detalles">
                  <h3>Detalles</h3>
                  <p>
                    <b>Moto:</b> {detalles.moto}
                  </p>
                  <p>
                    <b>Portal financiadores:</b> {detalles.portalFinanciadores}
                  </p>
                  <p>
                    <b>Mail aviso:</b>{" "}
                    {["si", "no"].includes(
                      detalles.mailAviso?.toLowerCase?.()
                    ) ? (
                      <span>{detalles.mailAviso}</span>
                    ) : (
                      <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                        {detalles.mailAviso}
                      </pre>
                    )}
                  </p>
                  <p>
                    <b>Portal subida:</b>{" "}
                    {["si", "no"].includes(
                      detalles.portalSubida?.toLowerCase?.()
                    ) ? (
                      <span>{detalles.portalSubida}</span>
                    ) : (
                      <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                        {detalles.portalSubida}
                      </pre>
                    )}
                  </p>
                  <p>
                    <b>Soporte TXT:</b>{" "}
                    {(() => {
                      const texto = detalles.soporteTXT || "";
                      const textoNormalizado = texto
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "");
                      return ["si", "no"].includes(textoNormalizado) ? (
                        <span>{texto}</span>
                      ) : (
                        <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                          {texto}
                        </pre>
                      );
                    })()}
                  </p>
                  <p>
                    <b>Soporte Excel:</b>{" "}
                    {(() => {
                      const texto = detalles.soporteExcel || "";
                      const textoNormalizado = texto
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "");
                      return ["si", "no"].includes(textoNormalizado) ? (
                        <span>{texto}</span>
                      ) : (
                        <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                          {texto}
                        </pre>
                      );
                    })()}
                  </p>
                  <p>
                    <b>Soporte refacturación:</b>{" "}
                    {detalles.soporteRefacturacion}
                  </p>
                </div>
              )}

              <div className="seccion seccion-notas">
                <h3>Notas</h3>
                <textarea
                  value={notas}
                  onChange={(e) => {
                    const nuevoTexto = e.target.value;
                    setCoberturas((prev) =>
                      prev.map((c) =>
                        c.id === id ? { ...c, notas: nuevoTexto } : c
                      )
                    );
                  }}
                  rows={3}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default App;
