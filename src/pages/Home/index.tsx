import React from 'react'
import styled from 'styled-components'
import Search from 'containers/Search'
// import useHome from './useHome'

const Home = () => {
  // const {} = useHome()

  return (
    <Container data-testid="home-page">
      <Search />
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.space.lg}px;
`
