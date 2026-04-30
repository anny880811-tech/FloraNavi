import { NavLink, Outlet } from 'react-router'

const FrontLayout = () => {
  return (
    <>
      <nav className="navbar navbar-custom navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-md-5" id="navbarNav">
            <NavLink className="navlink-custom" to="/flowers">四季花卉</NavLink>
            <NavLink className="navlink-custom" to="/map">賞花地圖</NavLink>
            <NavLink className="navlink-custom" to="/favorites">花緒私藏</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default FrontLayout
