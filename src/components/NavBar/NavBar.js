import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <header className="header">
            <div className="logo">FLEXVYNE WEB</div>
                <input type="checkbox" id="nav_check" hidden />
                <nav className="contenedor_hamburguesa">
                    <ul>
                        <li>
                            <a href="#" className="active">
                            Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#">Productos</a>
                        </li>
                        <li>
                            <a href="#">Nosotros</a>
                        </li>
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                        <li>
                            <a className="boton_login" href="#">
                            Login
                            </a>
                        </li>
                    </ul>
              </nav>
              <label htmlFor="nav_check" className="hamburger">
                <div></div>
                <div></div>
                <div></div>
              </label>
        <CartWidget />
        </header>
    )
}

export default NavBar