import React, { useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { Status } from 'types'
import useSearch from './useSearch'

const Search = () => {
  const {
    onChange,
    onClear,
    onSelectArtist,
    onSubmit,
    status,
    artists,
    total,
    text,
  } = useSearch()

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit()
    },
    [onSubmit]
  )

  const onSelectArtistHandler = useCallback(
    (id) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onSelectArtist(id)
    },
    [onSelectArtist]
  )

  return (
    <Container onSubmit={onSubmitHandler}>
      <InputContainer data-testid="search-form">
        <Input
          data-testid="search-input"
          type="text"
          placeholder="Search Artist"
          value={text}
          onChange={onChange}
        />
        {status === Status.PENDING && <Spinner />}
        {total === 0 && status === Status.FULFILLED && (
          <NotFound data-testid="not-found">
            Search results not found for {text}, try with different artist name
          </NotFound>
        )}
        {status === Status.FULFILLED && artists.length > 0 && (
          <>
            {/* type-button & type-submit should be defined when a form has multiple buttons */}
            <Clear data-testid="search-clear" type="button" onClick={onClear}>
              X
            </Clear>
            <SearchResults data-testid="search-results">
              <Arrow />
              <Title data-testid="search-results-title">Search results</Title>
              <Artists>
                {artists.map(({ id, name }) => (
                  <Artist
                    data-testid="artist-item"
                    key={id}
                    // href-with-# is important to enable accessibility & anchor-tag behavior
                    href="#"
                    onClick={onSelectArtistHandler(id)}
                  >
                    {name}
                  </Artist>
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

export default Search

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

const Clear = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  border: 0;
  border-radius: 50%;
  padding: 12px 16px;

  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
`

const SearchResults = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding: ${({ theme }) => theme.space.lg}px;
  padding-top: 0;
  margin-top: ${({ theme }) => theme.space.lg}px;

  background-color: #2c2c2c;
  color: #8b8b8b;
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
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

const Artists = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`

const Artist = styled.a`
  padding: ${({ theme }) => theme.space.md}px;
  padding-left: ${({ theme }) => theme.space.xxl}px;
  border-bottom: 1px solid #1c1c1c;

  text-decoration: none;
  color: #8b8b8b;
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
`
