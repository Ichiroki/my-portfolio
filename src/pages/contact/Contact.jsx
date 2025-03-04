import './contact.css'
import Anchor from '../../component/Anchor'
import { useLayoutEffect } from 'react';

function Contact() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | Contact"
    }, [])
    return (
        <>
            <Anchor href='/' round={true} floating={true}><i className="bi bi-house"></i></Anchor>
            <section className="contact" id="contact">
                <div>
                    <h1>Reach Me On</h1>
                </div>
                <div className="social-media">
                    <a href="#">
                        <i className="bi bi-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="#">
                        <i className="bi bi-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="#">
                        <i className="bi bi-github"></i>
                        <span>Github</span>
                    </a>
                    <a href="#">
                        <i className="bi bi-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                    <a href="#">
                        <i className="bi bi-envelope"></i>
                        <span>Email</span>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Contact;