import React from 'react'
import SkillsHolder from './skills/skillsHolder'
import MainBaseContent from './baseContent/mainBaseContent'
import FewText from './baseContent/fewText'
import ProjectsHolder from './baseContent/projectsHolder'
import Recommendation from './baseContent/Recommendation'
import Footer from '@/components/layouts/Footer'
import LetCollaborate from './baseContent/LetCollaborate'

function HomePage() {
  return (
    <div>
       <MainBaseContent/>
       <FewText/>
       <SkillsHolder/>
       <ProjectsHolder/>
       <Recommendation/>
        <SkillsHolder className='border-l-0 b border-r-0'/>
        <LetCollaborate/>
        <Footer/>
    </div>
  )
}

export default HomePage