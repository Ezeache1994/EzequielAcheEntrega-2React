import { NavLink } from "react-router-dom";

const Navigation = [
    { path: "/", label: "Inicio" },
    { path: "/Tecnologia", label: "Tecnologia" },
    { path: "/Musica", label: "Musica" },
    { path: "/Cocina", label: "Cocina" },
    { path: "/Construccion", label: "Construccion" },
    { path: "/Cine", label: "Cine" },
];

export default function CategoryList() {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <nav>
                <ul style={{ display: "flex" }}>
                    {Navigation.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                style={{ padding: "0.8rem" }}
                                className={({ isActive }) => (isActive ? "active-link" : "")}
                                to={link.path}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
