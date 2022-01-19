import React from 'react'
import { render, screen, waitFor } from 'utils/test-utils'
import AlbumViewer from './index'
import mockAlbums from 'mocks/mockAlbums'

describe('Artist', () => {
  const commonProps = {
    selectedArtist: '',
  }

  const renderComponent = (customProps = {}) => {
    const props = { ...commonProps, ...customProps }

    return render(<AlbumViewer {...props} />)
  }

  it('Should render Search-results & Album-results title initially', () => {
    renderComponent()

    expect(screen.getByTestId('search-results-title').textContent).toEqual(
      `Search results for "${commonProps.selectedArtist}"`
    )
    expect(screen.getByTestId('album-results-title').textContent).toEqual(
      'Albums'
    )

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument()
    expect(screen.queryByTestId('album-results')).not.toBeInTheDocument()
  })

  it('Should render album-results with album-items, for the given selectedArtist', async () => {
    renderComponent({ selectedArtist: 'Eminem' })

    screen.getByTestId('spinner')

    await waitFor(() => {
      screen.getByTestId('album-results')
    })

    expect(screen.getAllByTestId('album-item').length).toEqual(
      mockAlbums.data.length
    )

    screen.getAllByTestId('album-item').forEach((ele, key) => {
      expect(ele.textContent).toEqual(mockAlbums.data[key].title)
    })
  })

  it('Should render not-found text, when search-results not-found for the query', async () => {
    renderComponent({ selectedArtist: 'not-found-artist' })

    await waitFor(() => {
      screen.getByTestId('not-found')
    })

    expect(screen.getByTestId('not-found').textContent).toEqual(
      'Album results not found for not-found-artist, try with different artist name'
    )
  })
})
