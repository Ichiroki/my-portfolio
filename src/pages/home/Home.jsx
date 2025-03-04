import mirai from "/mirai.jpg"
import './home.css'
import Anchor from "../../component/Anchor"
import { useLayoutEffect } from "react"

function Home() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | Home"
    }, [])
    return (
        <header id="home">           
            <div>
                <img src={mirai} alt="" className="image" />
            </div>
            <h1 className="name" data-value="Fahrezi Rizqiawan">Fahrezi Rizqiawan</h1>
            <p>Web Developer</p>
            <div className="link-list">
                <Anchor href='/about'>About</Anchor>
                <Anchor href='/projects'>Projects</Anchor>
                <Anchor href='/contact'>Contact</Anchor>
            </div>
        </header>
    )
}

export default Home