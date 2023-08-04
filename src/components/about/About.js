import React from 'react'
import './about.css'
import aboutImg from '../../assets/imgAbout.png'
import CV from '../../assets/Sol-cv.pdf'
import SelfInfo from './SelfInfo.js'

export default function About() {
  return (
    <section className='about section' id='about'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'>My Introduction</span>

        <div className='about_container container grid'>
            <img src={ aboutImg } alt="" className='about_img'></img>

            <div className='about_data'>
                <SelfInfo></SelfInfo>

                <p className="about_description">
                    Software Engineer
				    Graduated at STI College Munoz EDSA SY 2015-2019
					Worked at Glotech PVT. Inc. since 2020 - 2022
					as a Radio Frequency/ Drive Test Engineer
					Currently Working at Iconiqlast
					as a Web Developer.
                </p>

                <a download="" href={ CV } className="button button--flex">Download CV<i className="uil uil-files-landscapes-alt button_icon"></i></a>
            </div>
        </div>
    </section>
  )
}
