import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import {Outlet} from 'react-router'

function AuthLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  )
}
export default AuthLayout

const Wrapper = styled.div``
