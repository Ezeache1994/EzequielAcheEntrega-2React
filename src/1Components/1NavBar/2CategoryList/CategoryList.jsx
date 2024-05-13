import React from 'react';
import { NavLink } from "react-router-dom";

const MisRutas = [
    {
        path: "",
        label: " Home "
    },
    {
        path: "/Category/Tecnologia",
        label: " Tecnologia "
    },
    {
        path: "/Category/Musica",
        label: " Musica "
    },
    {
        path: "/Category/Cocina",
        label: " Cocina"
    },
    {
        path: "/Category/Construccion",
        label: " Construccion"
    },
    {
        path: "/Category/Cine",
        label: " Cine"
    },
    {
        path: "",
        label: ""
    },
];

export default function CategoryList() {
    return (
        <nav>
            <ul style={{display:"flex", justifyContent:"space-between"
            }}>
                {MisRutas.map((ruta, index) => (
                    <li key={index}>
                        <NavLink style={{padding:"0.9rem"}}
                            className={({ isActive }) => (isActive ? "active-link" : "")}
                            to={ruta.path}
                        >
                            {ruta.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}




















