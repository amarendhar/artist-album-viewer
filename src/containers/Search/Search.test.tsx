import React from 'react'
import { render, screen, waitFor, fireEvent } from 'utils/test-utils'
import Search from './index'
import mockArtist from 'mocks/mockArtist'

describe('Artist', () => {
  it('Should render input-field with submit-button initially', () => {
    render(<Search />)

    screen.getByTestId('search-input')
    screen.getByTestId('search-button')
    expect(screen.queryByTestId('search-clear')).not.toBeInTheDocument()
    expect(screen.queryByTestId('search-results')).not.toBeInTheDocument()
  })

  it('Should render search-results with artist-items, onChange of search-input', async () => {
    render(<Search />)

    const input = screen.getByTestId('search-input')

    fireEvent.change(input, { target: { value: 'Prince' } })

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    expect(screen.getAllByTestId('artist-item').length).toEqual(
      mockArtist.data.length
    )

    screen.getAllByTestId('artist-item').forEach((ele, key) => {
      expect(ele.textContent).toEqual(mockArtist.data[key].name)
    })
  })

  it('Should render search-results with artist-items, onSubmit', async () => {
    render(<Search />)

    const input = screen.getByTestId('search-input')
    const form = screen.getByTestId('search-form')

    fireEvent.change(input, { target: { value: 'Prince' } })
    fireEvent.submit(form)

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    expect(screen.getAllByTestId('artist-item').length).toEqual(
      mockArtist.data.length
    )

    screen.getAllByTestId('artist-item').forEach((ele, key) => {
      expect(ele.textContent).toEqual(mockArtist.data[key].name)
    })
  })

  it('Should hide search-results onClick of clear-button', async () => {
    render(<Search />)

    const input = screen.getByTestId('search-input')
    const form = screen.getByTestId('search-form')

    fireEvent.change(input, { target: { value: 'Prince' } })
    fireEvent.submit(form)

    await waitFor(() => {
      screen.getByTestId('search-results')
    })

    screen.getByTestId('search-clear').click()

    expect(screen.queryByTestId('search-results')).not.toBeInTheDocument()
  })

  it('Should render not-found text, when search-results not-found for the query', async () => {
    render(<Search />)

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
