import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import {Outlet} from 'react-router'

function BasicLayout() {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Section>
        <Outlet />
      </Section>
      {/* <Footer /> */}
    </Wrapper>
  )
}

export default BasicLayout

const Wrapper = styled.div``

const Section = styled.div``
