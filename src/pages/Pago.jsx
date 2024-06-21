import React, { useState, useEffect } from 'react';
import CRUDTablePago from '../components/CRUDTablePago'; // Asegúrate de ajustar la importación al nombre correcto del componente

function Pago() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('pagos')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('pagos', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>Pagos de Materiales a Proveedores</h1>
      <CRUDTablePago
        data={data}
        setData={setData}
        fields={{ 
          fecha: '', 
          proveedor: '', 
          material: '', 
          monto: '', 
          metodoPago: '', 
          pagado: '' 
        }}
        placeholder={{ 
          fecha: 'Fecha', 
          proveedor: 'Proveedor', 
          material: 'Material', 
          monto: 'Monto', 
          metodoPago: 'Método de Pago', 
          pagado: 'Pagado' 
        }}
      />
    </div>
  );
}

export default Pago;
