import './ValoresTotales.css';
import { useState, useEffect, useRef } from 'react';


function TotalProductos() {



    // const estado = useState ([{totalUsuarios: ""},{totalProductos: ""},{totalCategorias: ""}]);
    // const valoresEstado = estado[0];
    // const setEstado = estado[1];

    // fetch('https://restcountries.com/v3.1/name/peru')
    // .then((response) => response.json())
    // .then((data) => setEstado([{totalUsuarios: data[0].population},{totalProductos: data[0].timezones},{totalCategorias: data[0].startOfWeek}]));
    
    const estado = useState ([{totalProductos: ""}]);
    const valoresEstado = estado[0];
    const setEstado = estado[1];

    fetch('https://prevento.onrender.com/api/products')
    .then((response) => response.json())
    .then((data) => setEstado([{totalProductos: data.total}]));

    

  return (
    <div className="App">
      <header className="App-header">
      </header>
    <body>

{/* primeros 3 casilleros */}
<div class="row">
  <div class="col-md-4 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Total de productos</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].totalProductos}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* 
  <div class="col-md-4 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de productos</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[1].totalProductos}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Total de categorías</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[2].totalCategorias}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

</body>
</div>
  );
}

export default TotalProductos;
