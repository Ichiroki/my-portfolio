import { useLayoutEffect } from 'react';
import Anchor from '../../component/Anchor';
import './about.css'
import mirai from '/mirai.png'

function About() {
    useLayoutEffect(() => {
        document.title = "My Portfolio | About"
    }, [])
    return (
        <section className="about" id="about">
            <Anchor href='/' round={true} floating={true}><i className="bi bi-house"></i></Anchor>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div>
                <div className="about-photo">
                    <img src={mirai} alt="" />
                </div>
                <div className="about-description">
                    <p className="bio">Tahun 2020, Saya mempelajari bagaimana cara membuat website, dimulai dari mempelajari HTML, CSS, dan Bootstrap 4. niat tersebut muncul pada saat terjadinya wabah COVID-19 yang terjadi di tahun tersebut. Tahun tersebut adalah tahun yang dimana saya sudah lulus sekolah dan juga menjadi sebuah mahasiswa di Institut Bisnis Muhammadiyah.</p>
                    <p className="bio">Tahun 2021, Saya mempelajari PHP dan Javascript untuk mengembangkan kemampuan saya untuk membuat sebuah website, dan pertama kali saya mempelajar bahasa pemrograman. Kemudian saya mempelajari bagaimana cara menggunakan Blender. Blender adalah sebuah aplikasi atau software untuk pembuatan sebuah model 3D</p>
                    <p className="bio">Tahun 2022, Saya mempelajari framework CSS yang bernama TailwindCSS, lanjut mempelajari Github yang berguna untuk melakukan pengelolaan proyek berbasis aplikasi.</p>
                    <p className="bio">Tahun 2023, Saya mulai magang di PT XYZ, tugas saya membuat landing page sederhana, membantu rekan kerja mengembangan aplikasi website, dan membuat aplikasi website peminjaman aset. Saya juga mempelajari Laravel, NodeJS, MongoDB, ReactJS, pembuatan dan menggunakan API  (Application Programming Interface), dan cara menggunakan ChatGPT</p>
                    <p className="bio">Tahun 2024, tahun ini adalah tahun saya akan lulus kuliah, kegiatan yang saya lakukan di tahun ini adalah mempelajari NextJS, membuat skripsi, membuat model 3D sederhana, mempelajari bahasa pemrograman Dart, dan framework Dart yang bernama Flutter. proyek yang sedang saya kerjakan saat ini adalah mengembangkan sebuah game android menggunakan Flutter.</p>
                </div>
            </div>
        </section>
    );
}

export default About;