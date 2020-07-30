import React from 'react'
import TheContent from './components/TheContent'
import TheHeader from './components/TheHeader'
import TheSidebar from './components/TheSidebar'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  )
}

export default TheLayout