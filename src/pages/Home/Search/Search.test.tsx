import React from 'react'
import { render, screen, waitFor, fireEvent } from 'utils/test-utils'
import Search from '.'
import mockArtists from 'mocks/mockArtists'

describe('Artist', () => {
  const commonProps = {
    setSelectedArtist: jest.fn(),
  }

  const renderComponent = () => {
    return render(<Search {...commonProps} />)
  }

  it('Should render input-field with submit-button initially', () => {
    renderComponent()

    screen.getByTestId('search-input')
    screen.getByTestId('search-button')
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument()
    expect(screen.queryByTestId('search-clear')).not.toBeInTheDocument()
    expect(screen.queryByTestId('search-results')).not.toBeInTheDocument()
  })

  it('Should render search-results with artist-items, onChange of search-input', async () => {
    renderComponent()

    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'Eminem' } })

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    expect(screen.getAllByTestId('artist-item').length).toEqual(
      mockArtists.data.length
    )

    screen.getAllByTestId('artist-item').forEach((ele, key) => {
      expect(ele.textContent).toEqual(mockArtists.data[key].name)
    })
  })

  it('Should render search-results with artist-items, onSubmit', async () => {
    renderComponent()

    const input = screen.getByTestId('search-input')
    const form = screen.getByTestId('search-form')

    fireEvent.change(input, { target: { value: 'Eminem' } })
    fireEvent.submit(form)

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    expect(screen.getAllByTestId('artist-item').length).toEqual(
      mockArtists.data.length
    )

    screen.getAllByTestId('artist-item').forEach((ele, key) => {
      expect(ele.textContent).toEqual(mockArtists.data[key].name)
    })
  })

  it('Should invoke setSelectedArtist, when clicked on an artist-item from the search-results', async () => {
    renderComponent()

    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'Eminem' } })

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    screen.getAllByTestId('artist-item')[0].click()

    expect(commonProps.setSelectedArtist).toHaveBeenCalledWith(
      mockArtists.data[0].name
    )
  })

  it('Should hide search-results onClick of clear-button', async () => {
    renderComponent()

    const input = screen.getByTestId('search-input')
    const form = screen.getByTestId('search-form')

    fireEvent.change(input, { target: { value: 'Eminem' } })
    fireEvent.submit(form)

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    screen.getByTestId('search-clear').click()

    expect(screen.queryByTestId('search-results')).not.toBeInTheDocument()
  })

  it('Should render not-found text, when search-results not-found for the query', async () => {
    renderComponent()

    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'not-found-artist' } })

    await waitFor(() => {
      screen.getByTestId('not-found')
    })

    expect(screen.getByTestId('not-found').textContent).toEqual(
      'Search results not found for not-found-artist, try with different artist name'
    )
  })
})
