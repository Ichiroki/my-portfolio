import Anchor from '../../component/Anchor'
import './projects.css'
import bahagiaku from '/bahagiaku.png'
import scythe from '/scythe.png'
import swdm from '/swdm.png'
import stockGudang from '/stock-gudang.png'
import { useLayoutEffect } from 'react'

function Projects() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | Projects"
    }, [])
    return (
        <>
            <Anchor href="/" round={true} floating={true}><i className="bi bi-house"></i></Anchor>
            <section className="project" id="project">
                <div>
                    <h1>Project</h1>
                </div>
                <div>
                    <p>Saya pernah mengerjakan sebuah proyek baik proyek secara tim maupun individu (tekan nama pada website dibawah ini)</p>
                </div>
                <div className="project-list">
                    <div>
                        <a href="https://swdm.me/" target="_blank">swdm.me</a>
                        <img src={swdm} alt=""/>
                    </div>
                    <div>
                        <a href="https://bahagiaku-ep.my.id/" target="_blank">Bahagiaku Event Organizer</a>
                        <img src={bahagiaku} alt=""/>
                    </div>
                    <div>
                        <a href="https://sketchfab.com/3d-models/scythe-of-the-dark-doom-c0ff16bd55634345afaf19fc602b665a" target="_blank">Scythe of The Dark Doom</a>
                        <img src={scythe} alt=""/>
                    </div>
                    <div>
                        <a href="#" target="_blank">Stock Gudang</a>
                        <img src={stockGudang} alt=""/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;