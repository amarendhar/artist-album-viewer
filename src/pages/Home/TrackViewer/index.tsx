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

const TrackViewer = ({ selectedAlbum, setSelectedTrack }: TrackViewerProps) => {
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
            <tbody>
              <TrackItem>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Time</th>
                <th>Released</th>
              </TrackItem>
              {tracks.map(({ id, title, artist, duration }, key) => {
                return (
                  <TrackItem key={id} data-testid="track-item">
                    <td data-testid="track-key">{key + 1}</td>
                    <td data-testid="track-title">{title}</td>
                    <td data-testid="track-name">{artist.name}</td>
                    <td data-testid="track-duration">
                      {getDuration(duration)}
                    </td>
                    {/* Couldn't find solution to convert `isrc: 'USIR10211051',` into date */}
                    <td>xxxx</td>
                  </TrackItem>
                )
              })}
            </tbody>
          </Tracks>
        </TrackResults>
      )}
    </Container>
  )
}

export default TrackViewer

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
`

const TrackResults = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding: ${({ theme }) => theme.space.lg}px;
  padding-left: 0;
  padding-top: 0;
  margin-top: -80px;

  color: #8b8b8b;
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`

const Tracks = styled.table`
  border-collapse: collapse;
  color: white;

  tr {
    background-color: #2c2c2c;

    th:first-child,
    td:first-child {
      padding-left: 150px;
      width: 0;
    }

    th:not(:first-child),
    td:not(:first-child) {
      border-bottom: 1px solid #1c1c1c;
    }
  }

  tr:first-child {
    background-color: transparent;
  }

  th,
  td {
    text-align: left;
    padding: ${({ theme }) => theme.space.lg}px;
    font-size: ${({ theme }) => theme.fontSizes.md}px;
  }

  overflow-y: auto;
`

const TrackItem = styled.tr`
  // border-bottom: 1px solid #1c1c1c;
`
