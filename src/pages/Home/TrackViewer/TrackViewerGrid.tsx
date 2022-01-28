import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'components'
import useTrackViewer from './useTrackViewer'
import { Album } from 'store/slices/albumSlice'
import getDuration from 'utils/getDuration'
import { STATUS } from 'types'
import { Track } from 'store/slices/trackSlice'

type TrackViewerProps = {
  selectedAlbum: Partial<Album['data'][0]>
  setSelectedTrack: React.Dispatch<
    React.SetStateAction<Partial<Track['data'][0]>>
  >
}

const TrackViewerGrid = ({
  selectedAlbum,
  setSelectedTrack,
}: TrackViewerProps) => {
  const { status, tracks, total } = useTrackViewer({ selectedAlbum })

  return (
    <Container data-testid="track-viewer">
      <AlbumTrack
        data-testid="album-track"
        onClick={(e) => {
          e.preventDefault()
        }}
      >
        <ImgContainer>
          <Img alt={selectedAlbum.title} src={selectedAlbum.cover} />
        </ImgContainer>
        <AlbumTitle>{selectedAlbum.title}</AlbumTitle>
      </AlbumTrack>
      {status === STATUS.PENDING && (
        <SpinnerContainer data-testid="spinner">
          <Spinner />
        </SpinnerContainer>
      )}
      {/* Similar to NotFound-Component, add Retry-Component on Error */}
      {total === 0 && status === STATUS.FULFILLED && (
        <NotFound data-testid="not-found">
          Album results not found for {selectedAlbum?.id}, try with different
          albumId
        </NotFound>
      )}
      {status === STATUS.FULFILLED && tracks.length > 0 && (
        <TrackResults data-testid="track-results">
          <Tracks>
            <TrackRowHeader>
              <span>#</span>
              <span>Title</span>
              <span>Artist</span>
              <span>Time</span>
              <span>Released</span>
            </TrackRowHeader>
            {tracks.map(({ id, title, artist, duration, preview }, key) => {
              return (
                <TrackItem
                  key={id}
                  data-testid="track-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedTrack({ title, preview })
                  }}
                >
                  <span data-testid="track-key">{key + 1}</span>
                  <span data-testid="track-title">{title}</span>
                  <span data-testid="track-name">{artist.name}</span>
                  <span data-testid="track-duration">
                    {getDuration(duration)}
                  </span>
                  {/* Couldn't find solution to convert `isrc: 'USIR10211051',` into date */}
                  <span>xxxx</span>
                </TrackItem>
              )
            })}
          </Tracks>
        </TrackResults>
      )}
    </Container>
  )
}

export default TrackViewerGrid

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.space.lg}px;
`

const AlbumTrack = styled.div`
  display: flex;

  padding-left: ${({ theme }) => theme.space.lg}px;

  text-decoration: none;
  color: #00ffff;
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`

const NotFound = styled.div`
  margin-top: ${({ theme }) => theme.space.lg}px;

  color: #8b8b8b;
`

const ImgContainer = styled.div`
  position: relative;

  width: 120px;
  height: 120px;

  background-color: #2c2c2c;
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

const AlbumTitle = styled.h3`
  margin: 0;
  margin-top: ${({ theme }) => theme.space.md}px;
  margin-left: ${({ theme }) => theme.space.lg}px;

  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${({ theme }) => theme.mediaQueries['<md']} {
    display: flex;
    align-items: center;
    flex: 1;

    margin-top: 0;
  }
`

const TrackResults = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding-bottom: ${({ theme }) => theme.space.lg}px;
  margin-top: -80px;

  color: #8b8b8b;
  font-size: ${({ theme }) => theme.fontSizes.lg}px;

  ${({ theme }) => theme.mediaQueries['<md']} {
    margin-top: ${({ theme }) => theme.space.md}px;
    overflow-x: auto;
  }
`

const Tracks = styled.div`
  color: white;

  div {
    background-color: transparent;
  }

  a {
    background-color: #2c2c2c;
  }

  span {
    display: inline-block;

    border-bottom: 1px solid #1c1c1c;
    padding: ${({ theme }) => theme.space.lg}px;

    font-size: ${({ theme }) => theme.fontSizes.md}px;
    text-align: left;

    &:first-child {
      padding-left: 150px;
      border: 0;
    }

    &:nth-child(4),
    &:nth-child(5) {
      text-align: center;
    }

    ${({ theme }) => theme.mediaQueries['<md']} {
      padding: ${({ theme }) => theme.space.md}px 5px !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const TrackRowHeader = styled.div`
  display: grid;
  grid-template-columns: 180px repeat(4, minmax(100px, 1fr));
  color: white;

  ${({ theme }) => theme.mediaQueries['<md']} {
    grid-template-columns: 40px repeat(4, minmax(0px, 1fr));
  }
`

const TrackItem = styled.a`
  display: grid;
  grid-template-columns: 180px repeat(4, minmax(100px, 1fr));

  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
  }

  ${({ theme }) => theme.mediaQueries['<md']} {
    grid-template-columns: 40px repeat(4, minmax(0px, 1fr));
  }
`
