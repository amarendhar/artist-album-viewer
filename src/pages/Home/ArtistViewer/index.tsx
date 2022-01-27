import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Clear } from 'components'
import useArtistViewer from './useArtistViewer'
import { STATUS } from 'types'

type ArtistViewerProps = {
  setSelectedArtist: React.Dispatch<React.SetStateAction<string>>
}

const ArtistViewer = ({ setSelectedArtist }: ArtistViewerProps) => {
  const {
    onChange,
    onClear,
    onSubmit,
    onSelectArtist,
    status,
    error,
    text,
    artists,
    total,
  } = useArtistViewer({ setSelectedArtist })

  return (
    <Container onSubmit={onSubmit} data-testid="artist-viewer">
      <InputContainer data-testid="search-form">
        <Input
          data-testid="search-input"
          type="text"
          placeholder="Search Artist"
          value={text}
          onChange={onChange}
        />
        {status === STATUS.PENDING && <Spinner data-testid="spinner" />}
        {/* Similar to NotFound-Component, add Retry-Component on Error */}
        {total === 0 && status === STATUS.FULFILLED && (
          <NotFound data-testid="not-found">
            Search results not found for {text}, try with different artist name
          </NotFound>
        )}
        {status === STATUS.FULFILLED && artists.length > 0 && (
          <>
            {/* Except type-submit-button all other buttons should have type-button-attr when a form has multiple buttons to trigger onSubmit handler properly */}
            <Clear onClear={onClear} />
            <SearchResults data-testid="search-results">
              <Arrow />
              <Title data-testid="search-results-title">Search results</Title>
              <Artists>
                {artists.map(({ id, name }) => (
                  <ArtistContainer key={id}>
                    <Artist
                      data-testid="artist-item"
                      // href-with-# is important to enable accessibility & anchor-tag behavior
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        onSelectArtist(name)
                      }}
                    >
                      {name}
                    </Artist>
                  </ArtistContainer>
                ))}
              </Artists>
            </SearchResults>
          </>
        )}
      </InputContainer>
      <Button data-testid="search-button" type="submit">
        Search
      </Button>
    </Container>
  )
}

export default ArtistViewer

const Container = styled.form`
  display: flex;
  justify-content: center;

  width: 100%;
  grid-gap: ${({ theme }) => theme.space.lg}px;
`

const InputContainer = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  border: 0;
  margin: 0;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding: ${({ theme }) => theme.space.lg}px;

  background-color: #2c2c2c;
  color: #8b8b8b;

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const Spinner = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.space.md}px;

  border: 3px solid #f3f3f3;
  animation: ${spin} 1s linear infinite;
  border-top: 3px solid #555;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const NotFound = styled.div`
  margin-top: ${({ theme }) => theme.space.lg}px;

  color: #8b8b8b;
`

const SearchResults = styled.div`
  position: absolute;
  top: 70px;

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding: ${({ theme }) => theme.space.lg}px;
  padding-top: 0;

  background-color: #2c2c2c;
  color: #8b8b8b;
  font-size: ${({ theme }) => theme.fontSizes.lg}px;

  z-index: 999;
`

const Arrow = styled.div`
  position: absolute;
  top: -10px;
  left: 50px;

  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #2c2c2c;
`

const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

const Artists = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`

const ArtistContainer = styled.li`
  padding-left: ${({ theme }) => theme.space.xxl}px;
  border-bottom: 1px solid #1c1c1c;
`

const Artist = styled.a`
  display: flex;

  padding: ${({ theme }) => theme.space.md}px;

  text-decoration: none;
  color: #8b8b8b;

  &:hover,
  &:focus {
    color: white;
  }
`

const Button = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding: 17px;
  height: fit-content;

  background-color: #00ffff;

  font-size: ${({ theme }) => theme.fontSizes.md}px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`
