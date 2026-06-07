import { NavLink } from "react-router";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="navbar-logo">CB</span>
                <span className="navbar-title">CrudBoard</span>
            </div>
            <div className="navbar-links">
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Users
                </NavLink>
                <NavLink
                    to="/add-user"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Add User
                </NavLink>
            </div>
        </nav>
    );
};