
import logo from '../assets/images/logo-DH.png'

function SideBar() {
  return (
    <div className="App">
		<ul class="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<img class="w-100" src={logo} alt="Digital House"></img>
				</div>
			</a>

			<hr class="sidebar-divider my-0"></hr>

			<li class="nav-item active">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></a>
			</li>

			<hr class="sidebar-divider"></hr>
			<div class="sidebar-heading">Actions</div>

			<li class="nav-item">
				<a class="nav-link collapsed" href="/">
					<i class="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			<hr class="sidebar-divider d-none d-md-block"></hr>
		</ul>
    </div>
  );
}

export default SideBar;