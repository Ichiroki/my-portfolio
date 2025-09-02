import { useLayoutEffect } from 'react'
import ButtonLink from '../../component/ButtonLink'
import './contact.css'
import { Link } from 'react-router-dom'

function Contact() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | Contact"
    }, [])
    return (
        <>
            <header id="contact" className='contact'>
                <fieldset className='fade-in glassmorphism'>
                    <legend>
                        <h1>How to contact me ?</h1>
                    </legend>
                    <div className='contact-content'>
                        <a href={'https://www.instagram.com/xchiroki__/'} className='link'>Instagram</a>
                        <a href={'https://github.com/Ichiroki'} className='link'>Github</a>
                        <a href={'https://www.linkedin.com/in/fahrezi-rizqiawan-82804a238/'} className='link'>LinkedIn</a>
                        <a href={'mailto:fahrezirizqiawan12649@gmail.com'} className='link'>Email</a>
                        <ButtonLink to={'/'}>Back to Dashboard</ButtonLink>
                    </div>
                </fieldset>  
            </header>
        </>
    );
}

export default Contact;