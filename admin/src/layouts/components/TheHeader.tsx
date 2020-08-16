import React from 'react'
import {  useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from '@coreui/react'

import routes from '../../routes'
import { changeSidebar } from '../../actions/system'


const TheHeader = () => {
  const dispatch = useDispatch()

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={ () => dispatch( changeSidebar() ) }
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={ () => dispatch( changeSidebar() )}
      />

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">.</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">.</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>.</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader