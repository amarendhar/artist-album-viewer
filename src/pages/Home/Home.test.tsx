import React from 'react'
import { render, screen, waitFor, fireEvent } from 'utils/test-utils'
import Home from '.'

describe('Home', () => {
  it('Should render only Search-Component initially', () => {
    render(<Home />)

    screen.getByTestId('search-form')
    expect(screen.queryByTestId('album-viewer')).not.toBeInTheDocument()
    expect(screen.queryByTestId('track-viewer')).not.toBeInTheDocument()
  })

  it('Should render AlbumViewer-Component When an Artist is selected from the Search-Results', async () => {
    render(<Home />)

    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'Eminem' } })

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    screen.getAllByTestId('artist-item')[0].click()

    screen.getByTestId('album-viewer')
  })

  it('Should render track-viewer-Component When an Album is selected from the Album-Results', async () => {
    render(<Home />)

    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'Eminem' } })

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    screen.getAllByTestId('artist-item')[0].click()

    await waitFor(() => {
      screen.getByTestId('album-results')
    })

    screen.getAllByTestId('album-item')[0].click()

    screen.getByTestId('track-viewer')
  })
})
