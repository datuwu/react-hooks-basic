import "../views/Nav.scss"
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" to="/timer" exact>Timer Apps</NavLink>
            <NavLink activeClassName="active" to="/todo" exact>Todo Apps</NavLink>
            <NavLink activeClassName="active" to="/blog" exact>Blog Apps</NavLink>
            <NavLink activeClassName="active" to="/secret" exact>Secret</NavLink>
        </div>
    );
}

export default Nav