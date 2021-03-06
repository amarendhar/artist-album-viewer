import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Header, Footer } from 'containers'
import { Home, NotFound } from 'pages'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default App

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`
