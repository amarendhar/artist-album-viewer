import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'components'
import useAlbumViewer from './useAlbumViewer'
import { Status } from 'types'

type AlbumViewerProps = {
  selectedArtist: string
}

const AlbumViewer = ({ selectedArtist }: AlbumViewerProps) => {
  const { status, albums, total } = useAlbumViewer({ selectedArtist })

  return (
    <Container>
      <SearchTitle data-testid="search-results-title">
        Search results for "{selectedArtist}"
      </SearchTitle>
      <AlbumResultTitle data-testid="album-results-title">
        Albums
      </AlbumResultTitle>
      {status === Status.PENDING && (
        <SpinnerContainer data-testid="spinner">
          <Spinner />
        </SpinnerContainer>
      )}
      {/* Similar to NotFound-Component, add Retry-Component on Error */}
      {total === 0 && status === Status.FULFILLED && (
        <NotFound data-testid="not-found">
          Album results not found for {selectedArtist}, try with different
          artist name
        </NotFound>
      )}
      {status === Status.FULFILLED && albums.length > 0 && (
        <Albums data-testid="album-results">
          {albums.map(({ id, title, cover }) => (
            <Album
              data-testid="album-item"
              key={id}
              href="#"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <ImgContainer>
                <Img alt={title} src={cover} />
              </ImgContainer>
              <AlbumTitle>{title}</AlbumTitle>
            </Album>
          ))}
        </Albums>
      )}
    </Container>
  )
}

export default AlbumViewer

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  margin-top: ${({ theme }) => theme.space.lg}px;
`

const SearchTitle = styled.h3`
  border-bottom: 1px solid #2c2c2c;
  margin: 0;
  padding: ${({ theme }) => theme.space.lg}px 0;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

const AlbumResultTitle = styled.h3`
  margin: 0;
  padding: ${({ theme }) => theme.space.lg}px 0;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: uppercase;

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

const Albums = styled.div`
  display: flex;
  grid-column-gap: ${({ theme }) => theme.space.xl}px;

  overflow-x: auto;
`

const Album = styled.a`
  text-decoration: none;
  color: #00ffff;

  cursor: pointer;
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

const AlbumTitle = styled.h4`
  text-align: center;
`
