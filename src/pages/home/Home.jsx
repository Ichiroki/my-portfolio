import NavLink from '../../component/NavLink'
import './home.css'

function Home() {

    return (
        <header id="home">         
            <fieldset className='glassmorphism fade-in'>
                <legend>Dashboard</legend>
                <div className='link-wrap'>
                    <NavLink to={'/about'}>Who am i ?</NavLink>
                    <NavLink to={'/projects'}>What'd i do ?</NavLink>
                    <NavLink to={'/contact'}>How to contact me ?</NavLink>
                </div>
            </fieldset>  
        </header>
    )
}

export default Home