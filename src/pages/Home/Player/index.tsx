import React from 'react'
import styled from 'styled-components'
import { Track } from 'store/slices/trackSlice'

type PlayerProps = {
  selectedTrack: Partial<Track['data'][0]>
}

const Player = ({ selectedTrack }: PlayerProps) => {
  const { title, preview } = selectedTrack

  return (
    <Container data-testid="player">
      <Title data-testid="player-title">{title}</Title>
      <Audio data-testid="player-audio" src={preview} controls autoPlay />
    </Container>
  )
}

export default Player

const Container = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  grid-gap: 10px;
  padding-bottom: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};
`

const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

const Audio = styled.audio`
  width: 100%;
`
