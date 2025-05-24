import React from 'react'
import SkillsHolder from './skills/skillsHolder'
import MainBaseContent from './baseContent/mainBaseContent'
import FewText from './baseContent/fewText'
import ProjectsHolder from './baseContent/projectsHolder'

function HomePage() {
  return (
    <div>
       <MainBaseContent/>
       <FewText/>
       <SkillsHolder/>
       <ProjectsHolder/>
    </div>
  )
}

export default HomePage