import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonLink({to, children}) {
    const [hovered, setHovered] = useState(false)
    const navigate = useNavigate()

    return (
        <button type='button' className='btn' 
        onClick={() => navigate(to)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
        }}>
            <i 
                className="bi bi-chevron-right"
                style={{
                    fontSize: '20px',
                    opacity: hovered ? 1 : 0,
                    visibility: hovered ? 'visible' : 'hidden',
                    transition: 'all 0.3s ease'
                }}
            ></i>
            <span
                style={{
                    transition: 'all .3s ease',
                    textAlign: 'justify',
                    letterSpacing: '1.3px',
                }}
            >
                {children}
            </span>
            <i 
                className="bi bi-chevron-right"
                style={{
                    transform: 'rotate(180deg)',
                    fontSize: '20px',
                    opacity: hovered ? 1 : 0,
                    visibility: hovered ? 'visible' : 'hidden',
                    transition: 'all 0.3s ease'
                }}
            ></i>
        </button>
    );
}

export default ButtonLink;