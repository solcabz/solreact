import React from 'react'

export default function SelfInfo() {
  return (
    <div className='about_info grid'>
      <div className='about_box'>
        <i className='bx bx-award' ></i>
        <h3 className='about_title'>Experience</h3>
        <span className='about_subtitle'>1 Year Working</span>
      </div>

      <div className='about_box'>
      <i className='bx bx-briefcase-alt-2' ></i>
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>5 projects</span>
      </div>

      <div className='about_box'>
        <i className='bx bx-support' ></i>
        <h3 className='about_title'>Support</h3>
        <span className='about_subtitle'>24/7</span>
      </div>
    </div>
  )
}
