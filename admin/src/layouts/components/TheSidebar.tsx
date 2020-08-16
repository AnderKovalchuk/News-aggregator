import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import navigation from '../_nav'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { changeSidebar } from '../../actions/system'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector( (state: RootState ) => state.system.sidebarShow )

  return (
    <CSidebar
      show={ show } 
      onShowChange={ () => dispatch( changeSidebar() )}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <h2 className="c-sidebar-brand-full"> M2.News</h2> 
        <h2 className="c-sidebar-brand-minimized"> M2</h2> 
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)