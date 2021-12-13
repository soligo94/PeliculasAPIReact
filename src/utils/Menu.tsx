import { NavLink } from "react-router-dom";

export default function Menu(){
    const classeActiva = "active";
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink activeClassName={classeActiva} className="navbar-brand" to="/" >React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classeActiva} to="/generos">
                                Géneros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classeActiva} to="/peliculas/filtrar">
                                Filtrar películas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classeActiva} to="/actores">
                                Actores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classeActiva} to="/cines">
                                Cines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classeActiva} to="/peliculas/crear">
                                Crear película
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}