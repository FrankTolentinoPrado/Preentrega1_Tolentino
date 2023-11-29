import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return(
        <header className="header">
            <Link to="/">
            <h3 className="logo">FLEXVYNE</h3>
            </Link>
                <input type="checkbox" id="nav_check" hidden />
                <div className="Categorias">
                    <NavLink to={"/category/Funko"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
                    <NavLink to={"/category/Ropa"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
                    <NavLink to={"/category/Peluches"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
                    <NavLink to={"/category/Coleccionables"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
                </div>
        <CartWidget />
        </header>
    )
}

export default NavBar