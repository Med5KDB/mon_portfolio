import React, { Fragment } from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import OtherSkills from './OtherSkills'

const Skills = () => {
  return (
    <Fragment>
      <section className='skills section' id='skills'>
          <div className="skills__container container grid">
              <div className="skills__content grid">
                  <Frontend />
                  <Backend />
                  <OtherSkills />
              </div>
          </div>
      </section>
    </Fragment>
  )
}

export default Skills;
