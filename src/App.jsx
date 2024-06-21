import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Venta from './pages/Venta';
import Pedido from './pages/Pedido';
import Pago from './pages/Pago';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Materiales
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              Proveedores
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="/Venta" activeClassName="active">
              Venta mostrador
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pedido" activeClassName="active">
              Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pago" activeClassName="active">
              Pagos a provedor
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Venta" element={<Venta />} />
        <Route path="/Pedido" element={<Pedido />} />
        <Route path="/Pago" element={<Pago />} />
      </Routes>
    </Router>
  );
}

export default App;
