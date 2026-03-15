import './about.css'
import aboutImg from '../../assets/imgAbout.png'
import SelfInfo from './SelfInfo.js'

export default function About() {
    return (
        <section className='about section' id='about'>
            <h2 className='section_title'>About Me</h2>
            <span className='section_subtitle'>My Introduction</span>

            <div className='about_container container grid'>
                <img src={aboutImg} alt="" className='about_img'></img>

                <div className='about_data'>
                    <SelfInfo></SelfInfo>

                    <br></br>
                    <p className="about_description">
                        <strong>Website Development Supervisor at SMDC</strong>
                        <span className="desc_text">
                            With experience in managing and maintaining corporate websites and digital platforms. Responsible for overseeing website development, ensuring performance, security, and responsiveness while coordinating with cross-functional teams to deliver high-quality web solutions.
                        </span>
                    </p>

                    <a
                        href="/SolomonCabrezaCV.pdf"
                        download
                        className="button button--flex"
                    >
                        Download CV
                        <i className="uil uil-files-landscapes-alt button_icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}
