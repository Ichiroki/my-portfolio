import { Link } from "react-router-dom"

function Anchor({href, children, floating, round}) {
    let float = ''
    let rounded = ''
    if(floating === true) {
        float += 'floating'
    } else {
        float = ''
    }

    if(round === true) {
        rounded += ' rounded'
    } else {
        rounded = ''
    }

    return (
        <Link to={href} className={`link ${float} ${rounded}`}>{children}</Link>
    )
}

export default Anchor