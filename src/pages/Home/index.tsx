import React from 'react'
import styled from 'styled-components'
import AlbumViewer from './AlbumViewer'
import Search from './Search'
import useHome from './useHome'

const Home = () => {
  const { setSelectedArtist, selectedArtist } = useHome()

  return (
    <Container data-testid="home-page">
      <Search setSelectedArtist={setSelectedArtist} />
      {selectedArtist && <AlbumViewer selectedArtist={selectedArtist} />}
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.space.lg}px;
`
