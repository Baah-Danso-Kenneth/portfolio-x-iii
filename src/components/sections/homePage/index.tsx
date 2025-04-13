import React from 'react'
import SkillsHolder from './skills/skillsHolder'
import MainBaseContent from './baseContent/mainBaseContent'
import FewText from './baseContent/fewText'

function HomePage() {
  return (
    <div>
       <MainBaseContent/>
       <FewText/>
       <SkillsHolder/>
    </div>
  )
}

export default HomePage