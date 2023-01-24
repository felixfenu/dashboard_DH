import './App.css';
// importo los componentes
import ValoresTotales from './components/ValoresTotales';
import PanelesDatos from './components/PanelesDatos';
// importar hooks 
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
      </header>
      {/* <!-- Sidebar --> */}

    <body> 
      
    <div id="wrapper"> 

		<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Admin</div>
			</a>

    <hr class="sidebar-divider my-0"></hr>

    <li class="nav-item active">
      <a class="nav-link" href="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </li>

    <hr class="sidebar-divider my-0"></hr>

    <li class="nav-item">
				<a class="nav-link collapsed" href="/">
					<i class="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

      <hr class="sidebar-divider my-0"></hr>

      <li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

      <hr class="sidebar-divider my-0"></hr>

      <li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

      <hr class="sidebar-divider my-0"></hr>

    </ul>

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Dashboard Prevento</h1>
          </div>
          <div class="row">
            <ValoresTotales/>
          </div>
          <div class="row">
            <PanelesDatos/>
          </div>
          
          
        </div>

      </div>
      <footer class="sticky-footer bg-white">
				<div class="container my-auto">
					<div class="copyright text-center my-auto">
						<span>Copyright &copy; Prevento</span>
					</div>
				</div>
			</footer>

    </div>
    </div>
    </body>
    </div>

   
  );
}

export default App;
