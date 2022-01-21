import React from 'react'
import styled from 'styled-components'
import useHome from './useHome'
import ArtistViewer from './ArtistViewer'
import AlbumViewer from './AlbumViewer'
import TrackViewer from './TrackViewer'

const Home = () => {
  const { setSelectedArtist, selectedArtist, setSelectedAlbum, selectedAlbum } =
    useHome()

  return (
    <Container data-testid="home-page">
      <ArtistViewer setSelectedArtist={setSelectedArtist} />
      {selectedArtist && (
        <AlbumViewer
          selectedArtist={selectedArtist}
          setSelectedAlbum={setSelectedAlbum}
        />
      )}
      {selectedAlbum?.id && <TrackViewer selectedAlbum={selectedAlbum} />}
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
