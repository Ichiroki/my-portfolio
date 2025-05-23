import ButtonLink from '../../component/ButtonLink';
import './projects.css'
import scythe from '/img/scythe.png'
import swdm from '/img/swdm.png'
import stockGudang from '/img/stock-gudang.png'
import rapb from '/img/rapb.png'
import { useLayoutEffect } from 'react'

function Projects() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | Projects"
    }, [])
    return (
        <>
            <header id="about" className='about'>         
            <fieldset className='fade-in glassmorphism'>
                <legend>
                    <h1>What'd i do ?</h1>
                </legend>
                <div className='about-content'>
                    <div>
                        <p
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            I've been implement much of works that was originally created by me, this work either a web application or 3d Models. take a look.
                        </p>
                        <div 
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '10px',
                            marginTop: '25px'
                        }}>
                            <div>
                                <h4 style={{
                                    textAlign: 'center',
                                    marginBottom: "10px",
                                    fontSize: "20px"
                                }}>Scythe of the dark doom</h4>
                                <img src={scythe} alt="" style={{
                                    width: '200px'
                                }}/>
                            </div>
                            <div>
                                <h4 style={{
                                    textAlign: 'center',
                                    marginBottom: "10px",
                                    fontSize: "20px"
                                }}>Secret Weapon Deathmatch</h4>
                                <img src={swdm} alt="" style={{
                                    width: '250px'
                                }}/>
                            </div>
                            <div>
                                <h4 style={{
                                    textAlign: 'center',
                                    marginBottom: "10px",
                                    fontSize: "20px"
                                }}>Stock Gudang</h4>
                                <img src={stockGudang} alt="" style={{
                                    width: '250px'
                                }}/>
                            </div>
                            <div>
                                <h4 style={{
                                    textAlign: 'center',
                                    marginBottom: "10px",
                                    fontSize: "20px"
                                }}>RAPB</h4>
                                <img src={rapb} alt="" style={{
                                    width: '250px'
                                }}/>
                            </div>
                        </div>
                    </div>
                    <ButtonLink to={'/'}>Back to Dashboard</ButtonLink>
                </div>
            </fieldset>  
        </header>
        </>
    );
}

export default Projects;