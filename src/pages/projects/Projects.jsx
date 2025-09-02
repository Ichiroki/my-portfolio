import ButtonLink from '../../component/ButtonLink';
import './projects.css'
import { useLayoutEffect } from 'react'
import projects from './projectList';

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
                            I've been implement much of works that was originally created by me, this work either a web application or 3d Models. take a look. Some of my project has link to show my original content, some of them doesn't have link or just show Github repositories
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
                        {projects.map((project) => 
                            <div>
                                <h4 style={{
                                    marginBottom: "10px",
                                    fontSize: "24px"
                                }}><a href={project.link} target='_blank'>{project.title}</a></h4>
                                <div>
                                    <span style={{display: 'flex'}}>{project.kind}</span>
                                    <ul style={{marginLeft: '1rem', marginTop: '15px'}}>
                                        {project.explanation.map((exp) => (
                                            <li>{exp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <ButtonLink to={'/'}>Back to Dashboard</ButtonLink>
                </div>
            </fieldset>  
        </header>
        </>
    );
}

export default Projects;