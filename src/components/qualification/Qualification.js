import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='section qualification' id='portfolio'>
    <h2 className='section_title'>Qualification</h2>
    <span className='section_subtitle'>My personal journey</span>

     <div className='qualification_container container grid'>
        <div className='qualification_tabs'>
            <div className={ toggleState === 1 ? 'qualification_button qualification_active button--flex' : 'qualification_button button--flex' } onClick={ () => toggleTab(1) }>
                <i className='uil uil-graduation-cap qualificatio_icon'></i> Education
            </div>

            <div className={ toggleState === 2 ? 'qualification_button qualification_active button--flex' : 'qualification_button button--flex' } onClick={ () => toggleTab(2) }>
                <i className='uil uil-briefcase-alt qualificatio_icon'></i> Experience
            </div>
        </div>
        
        <div className="qualification_sections">
            <div className={ toggleState === 1 ? "qualification_content  qualification_content-active" : "qualification_content  "}>
                <div className='qualification_data'>
                    <div>
                        <h3 className='qualification_title'>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</h3>
                        <span className='qualification_subtitle'>Udemy</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - present
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className='qualification_data'>
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className='qualification_title'>Bachelor of Science in Information Technology</h3>
                        <span className='qualification_subtitle'>STI College Munoz EDSA</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2015 - 2019
                        </div>
                    </div>
                </div>

                {/* <div className='qualification_data'>
                    <div>
                        <h3 className='qualification_title'>Web Developer</h3>
                        <span className='qualification_subtitle'>Iconiqlast</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - present
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div> */}

              
            </div>

            <div className={ toggleState === 2 ? "qualification_content  qualification_content-active" : "qualification_content  "}>
                <div className='qualification_data'>
                    <div>
                        <h3 className='qualification_title'>Web Developer A</h3>
                        <span className='qualification_subtitle'>Iconiqlast Studio</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - present
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className='qualification_data'>
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className='qualification_title'>Radio Frequency Engineer RF/DTE"</h3>
                        <span className='qualification_subtitle'>Glotech Int.</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>2020 - 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
 </section>
  )
}

export default Qualification
