import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarProducto } from "./store/cartSlice";
import "./App.css"; 
import imgBlanco from "./assets/vino_blanco.jpg";
import imgTinto from "./assets/vino_rojo.jpg";
import imgDulce from "./assets/vino_dulce.jpg";

function App() {
  
  const productos = [
    {
      id: 1,
      nombre: "Vino blanco Gato siamés",
      precio: 115.01,
      img: imgBlanco,
    },
    {
      id: 2,
      nombre: "Vino tinto Casillero del Diablo",
      precio: 86,
      img: imgTinto,
    },
    {
      id: 3,
      nombre: "Vino dulce reservado",
      precio: 97.5,
      img: imgDulce,
    },
  ];

/**************************
**LÓGICA DE LA APLICACIÓN**
***************************/

  // Estado del carrito que inicia vacío.
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  function agregarCarrito(producto) {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
  }

  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(id) {
    let coincidencia = false;
    const nuevoCarrito = [];
    
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === id && !coincidencia) {
        // Saltamos este elemento (lo eliminamos)
        coincidencia = true;
      } else {
        // Mantenemos este elemento
        nuevoCarrito.push(carrito[i]);
      }
    }
    
    setCarrito(nuevoCarrito);
  }

  // Función para vaciar todo el carrito
  function vaciarCarrito() {
    setCarrito([]);
  }

  // Calcular el total del carrito
  function calcularTotal() {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].precio;
    }
    return suma;
  }

  const total = calcularTotal();

  return (
    <div className="container">
      <h1 className="titulo">VendimiaMx - Carrito de Compras</h1>

      <div className="layout">
        {/* SECCIÓN DE PRODUCTOS */}
        <section className="contenedor-productos">
          {productos.map(function(producto) {
            return (
              <div key={producto.id} className="card">
                <img 
                  src={producto.img} 
                  alt={producto.nombre} 
                  className="imagen" 
                />
                <h3 className="nombre-producto">{producto.nombre}</h3>
                <p className="precio">${producto.precio.toFixed(2)}</p>
                <button
                  className="btn-add"
                  onClick={function() {
                    agregarCarrito(producto);
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            );
          })}
        </section>

        {/* SECCIÓN DEL RESUMEN DEL PEDIDO */}
        <aside className="resumen-card">
          <h2 className="titulo-resumen">Resumen del Pedido</h2>

          {carrito.length === 0 ? (
            <p className="carrito-vacio">Tu carrito está vacío</p>
          ) : (
            <>
              {carrito.map(function(item, index) {
                return (
                  <div key={index} className="item-carrito">
                    <span className="nombre-item">{item.nombre}</span>
                    <div className="precio-delete">
                      <strong className="precio-item">
                        ${item.precio.toFixed(2)}
                      </strong>
                      <button
                        className="btn-delete"
                        onClick={function() {
                          eliminarDelCarrito(item.id);
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="total-seccion">
                <h3 className="total-texto">Total: ${total.toFixed(2)}</h3>
                <button 
                  className="btn-vaciar" 
                  onClick={vaciarCarrito}
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;