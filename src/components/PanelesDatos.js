import './PanelesDatos.css';
import { useState, useEffect, useRef } from 'react';

function PanelesDatos() {

    const estado = useState ();
    const valoresEstado = estado[0];
    const setEstado = estado[1];

    const estado1 = useState ();
    const valoresEstado1 = estado1[0];
    const setEstado1 = estado1[1];

    const estado2 = useState ();
    const valoresEstado2 = estado2[0];
    const setEstado2 = estado2[1];

    const estado3 = useState ();
    const valoresEstado3 = estado3[0];
    const setEstado3 = estado3[1];

    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/products/categories')
    .then((response) => response.json())
    .then((data) => setEstado(data.length));
    },[])

    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/products/lastCreated')
    .then((response) => response.json())
    .then((data) => setEstado1(data.nombre));
     },[])

    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/products/categories')
    .then((response) => response.json())
    .then((data) => {

      var listaCategorias=[]
      for(var i=0;i<data.length;i++){
        listaCategorias.push(data[i].nombre)
        listaCategorias.push(<br/>)

      }
      setEstado2(listaCategorias)
});
    },[])

    useEffect( () => { 
    fetch('https://prevento.onrender.com/api/products')
    .then((response) => response.json())
    .then((data) => {

      var listaProductos=[]
      for(var i=0;i<data.detalle.length;i++){
        listaProductos.push(data.detalle[i].nombre)
        listaProductos.push(<br/>)
      }
      setEstado3(listaProductos)
    });
    },[])
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <body>
  
  <div class="row">
    <div class="col-md-3 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Total de categorias</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado}</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-4">
      <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">  Ultimo producto creado</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado1}</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Categorías</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado2}</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-4">
      <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Listado de productos</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado3}</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
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

export default PanelesDatos;
