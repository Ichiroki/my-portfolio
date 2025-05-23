import ButtonLink from '../../component/ButtonLink';
import './about.css'

function About() {
    return (
        <header id="about" className='about'>         
            <fieldset className='fade-in glassmorphism'>
                <legend>
                    <h1>Who am i ?</h1>
                </legend>
                <div className='about-content'>
                    <div>
                        <p>
                            I am a web developer, passionate to create and implement. I am a Fresh Graduate that graduated from 
                            <a href='https://ibm.ac.id/' target='_blank'> Institut Bisnis Muhammadiyah</a> at 14 December 2024. I love to learn something new and looks challenging to me (just a normal person wanted to have a peace in life)
                        </p>
                        <br />
                        <p>
                            at the year 2020, I learn how to create a website, start from learning HTML, CSS, and Bootstrap 4. This intention comes when COVID-19 started at that year. And this year is the year i graduate from high school and continue my education at Institut Bisnis Muhammadiyah.
                        </p>
                        <br />
                        <p>
                            at the year 2021, I start learn website programming language like PHP, MySQL and Javascript to raise up my skill to create a website, and that was the first time i learn programming language. Then i learn how to use Blender. Blender is a software to create a 3D Model or Object.
                        </p>
                        <br />
                        <p>
                            at the year 2022, I learn TailwindCSS, continue learn GitHub that useful for managing project application based.
                        </p>
                        <br />
                        <p>
                            at the year 2023, I start to take an internship at PT Astronacci International, i work to create simple landing page, collaborate with peers to develop website application, and create application asset lending. I start to learn Laravel, NodeJS, MongoDB, ReactJS, create and use API (Application Programming Interface), and how to use ChatGPT as an Supportive Artificial Intelligence.
                        </p>
                        <br />
                        <p>
                            at the year 2024, this year is a year that i will graduate from college, activity i do is focus on my final assigment, learn NextJS, learn Dart, learn Flutter, and create simple 3D Models.
                        </p>
                    </div>
                    <ButtonLink to={'/'}>Back to Dashboard</ButtonLink>
                </div>
            </fieldset>  
        </header>
    );
}

export default About;