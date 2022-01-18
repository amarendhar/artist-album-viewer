import { Loader } from 'components'
import { Retry } from 'containers'
import React from 'react'
import { Status } from 'types'
import useHome from './useHome'

const Home = () => {
  const { status, error, data, getArtist, selectedArtist, handleSelectArtist } =
    useHome()

  console.log('data -> ', data)

  if (status === Status.PENDING) {
    return <Loader />
  }

  return (
    <div data-testid="home-page">
      {error ? <Retry onRetry={getArtist} /> : <div>Home</div>}
    </div>
  )
}

export default Home
