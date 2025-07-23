import ButtonLink from '../../component/ButtonLink';
import './projects.css'
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
                            I've been implement much of works that was originally created by me, this work either a web application or 3d Models. take a look. Some of my project has link to show my original content, some of them doesn't have link or just show Github
                        </p>
                    </div>
                    <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'space-between',
                        gap: '10px',
                        marginTop: '25px'
                    }}>
                        <div>
                            <h4 style={{
                                textAlign: 'center',
                                marginBottom: "10px",
                                fontSize: "24px"
                            }}><a href="https://skfb.ly/p8FxX" target='_blank'>1. Scythe of the dark doom</a></h4>
                            <div>
                                <span style={{display: 'flex'}}>Kind of Project : 3D Models</span>
                                <ul style={{marginLeft: '1rem', marginTop: '15px'}}>
                                    <li>Create using Blender</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        <h4 style={{
                                textAlign: 'center',
                                marginBottom: "10px",
                                fontSize: "24px"
                            }}><a href="https://swdm.me/" target='_blank'>2. Secret Weapon Deathmatch</a></h4>
                            <div>
                                <span style={{display: 'flex'}}>Kind of Project : Website</span>
                                <ul style={{marginLeft: '1rem', marginTop: '15px'}}>
                                    <li>Designing user interface</li>
                                    <li>Create rules page</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 style={{
                                marginBottom: "10px",
                                fontSize: "24px"
                            }}><a href="https://swdm.me/" target='_blank'>3. Rencana Anggaran Penerimaan dan Beban</a></h4>
                            <div>
                                <span style={{display: 'flex'}}>Kind of Project : Website</span>
                                <ul style={{marginLeft: '1rem', marginTop: '15px'}}>
                                    <li>Create Website using CodeIgniter4 and MySQL as a database</li>
                                    <li>build a simple website application with adaptable user interface</li>
                                    <li>has role and permission system</li>
                                    <li>builded for API and Fullstack</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 style={{
                                marginBottom: "10px",
                                fontSize: "24px"
                            }}><a href="https://ichiroki.itch.io/pixel-food-and-item-16-x-16" target='_blank'>4. Pixel Food and Item | 16 x 16</a></h4>
                            <div>
                                <span style={{display: 'flex'}}>Kind of Project : Design</span>
                                <ul style={{marginLeft: '1rem', marginTop: '15px'}}>
                                    <li>Create design using Aseprite</li>
                                    <li>Created in 16 x 16 size</li>
                                    <li>Has 70+ Design</li>
                                </ul>
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