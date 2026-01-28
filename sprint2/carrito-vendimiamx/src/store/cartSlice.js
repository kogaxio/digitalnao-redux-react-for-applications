import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Acción para agregar: recibe el producto y lo mete al array
    agregarProducto: (state, action) => {
      state.push(action.payload);
    },
    // Acción para eliminar: busca el índice y quita un elemento
    eliminarProducto: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    // Acción para vaciar: simplemente devuelve un array nuevo vacío
    vaciarCarrito: () => {
      return [];
    },
  },
});

// Exportamos las acciones para usarlas en App.jsx con dispatch
export const { agregarProducto, eliminarProducto, vaciarCarrito } =
  cartSlice.actions;

// Exportamos el reducer para que el store.js lo pueda registrar
export default cartSlice.reducer;
