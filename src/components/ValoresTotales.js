import './ValoresTotales.css';
import { useState, useEffect, useRef } from 'react';

function ValoresTotales() {

    const estado = useState ();
    const valoresEstado = estado[0];
    const setEstado = estado[1];

    const estado1 = useState ();
    const valoresEstado1 = estado1[0];
    const setEstado1 = estado1[1];

    const estado2 = useState ();
    const valoresEstado2 = estado2[0];
    const setEstado2 = estado2[1];

    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/users')
    .then((response) => response.json())
    .then((data) => setEstado(data.total))
    },[])

    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/products')
    .then((response) => response.json())
    .then((data) => setEstado1(data.total));
    },[])
 
    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/users/lastCreated')
    .then((response) => response.json())
    .then((data) => setEstado2(data.nombre));
    },[])

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
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Total de usuarios</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de productos</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado1}</div>
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
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Ultimo usuario creado</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado2}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</div>
  );
}

export default ValoresTotales;
