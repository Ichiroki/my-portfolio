import { useLayoutEffect } from 'react'
import ButtonLink from '../../component/ButtonLink'
import './contact.css'

function Contact() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | Contact"
    }, [])
    return (
        <>
            <header id="about" className='about'>         
                <fieldset className='fade-in glassmorphism'>
                    <legend>
                        <h1>How to contact me ?</h1>
                    </legend>
                    <div className='about-content'>
                        <div
                        style={{
                            display: 'flex',
                            gap: '5px'
                        }}>
                            <ButtonLink to={'/'}>
                                <i className="bi bi-facebook"></i>
                                <span>Facebook</span>
                            </ButtonLink>
                            <ButtonLink to={'/'}>
                                <i className="bi bi-instagram"></i>
                                <span>Instagram</span>
                            </ButtonLink>
                            <ButtonLink to={'/'}>
                                <i className="bi bi-github"></i>
                                <span>GitHub</span>
                            </ButtonLink>
                            <ButtonLink to={'/'}>
                                <i className="bi bi-linkedin"></i>
                                <span>LinkedIn</span>
                            </ButtonLink>
                            <ButtonLink to={'/'}>
                                <i className="bi bi-envelope"></i>
                                <span>Email</span>
                            </ButtonLink>
                        </div>
                        <ButtonLink to={'/'}>Back to Dashboard</ButtonLink>
                    </div>
                </fieldset>  
            </header>
        </>
    );
}

export default Contact;