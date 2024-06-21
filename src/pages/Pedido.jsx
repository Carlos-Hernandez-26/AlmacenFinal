import React, { useState, useEffect } from 'react';
import CRUDTablePedido from '../components/CRUDTablePedido'; // Asegúrate de ajustar la importación al nombre correcto del componente

function Pedido() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('pedidos')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>Pedidos de Material</h1>
      <CRUDTablePedido
        data={data}
        setData={setData}
        fields={{ 
          fecha: '', 
          material: '', 
          cliente: '', 
          metodoPago: '', 
          pagado: '', 
          cantidad: '' 
        }}
        placeholder={{ 
          fecha: 'Fecha', 
          material: 'Material', 
          cliente: 'Cliente', 
          metodoPago: 'Método de Pago', 
          pagado: 'Pagado', 
          cantidad: 'Cantidad' 
        }}
      />
    </div>
  );
}

export default Pedido;
