import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import'./skills.css'

export default function Skills() {
  return (
    <section className='section skills' id='skills'>
       <h2 className='section_title'>Skills</h2>
       <span className='section_subtitle'>Technical Level</span>

        <div className='skills_container container grid'>
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}
