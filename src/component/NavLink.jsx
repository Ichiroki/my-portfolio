import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({to, children}) {
    const [hovered, setHovered] = useState(false)
    
    return (
        <Link
        to={to}
        className="link"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        style={{
            backgroundColor: hovered ? '#333' : "transparent",
            width: '100%',
            padding: '1rem 0',
            textDecoration: 'none',
            color: 'inherit',
        }}
        >
            <i 
                className="bi bi-chevron-right"
                style={{
                    fontSize: '20px',
                    marginLeft: '8px',
                    transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                    opacity: hovered ? 1 : 0,
                    visibility: hovered ? 'visible' : 'hidden',
                    transition: 'all 0.3s ease'
                }}
            ></i>
            <span
                style={{
                    transform: hovered ? 'translateX(15px)' : 'translateX(-15px)',
                    transition: 'all .3s ease',
                    textAlign: 'justify',
                    letterSpacing: '1.3px',
                }}
            >
                {children}
            </span>
        </Link>
    )
}
