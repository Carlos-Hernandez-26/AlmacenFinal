import React, { useState, useEffect } from 'react';
import CRUDTable from '../components/CRUDTableVenta';

function Venta() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ventas')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('ventas', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>Ventas Mostrador</h1>
      <CRUDTable
        data={data}
        setData={setData}
        fields={{ 
          fecha: '', 
          total: '', 
          tipoPago: '', 
          cliente: '', 
          cantidad: '', 
          productos: '' 
        }}
        placeholder={{ 
          fecha: 'Fecha', 
          total: 'Total', 
          tipoPago: 'Tipo de Pago', 
          cliente: 'Cliente', 
          cantidad: 'Cantidad', 
          productos: 'Productos' 
        }}
      />
    </div>
  );
}

export default Venta;
