import artistReducer, { ArtistState, Artist, fetchArtists } from './artistSlice'
import mockArtists from 'mocks/mockArtists'
import { Status } from 'types'

describe('artist reducer', () => {
  const initialState: ArtistState = {
    data: {} as Artist,
    status: Status.IDLE,
    error: null,
  }

  it('Should handle initial-state', () => {
    expect(artistReducer(undefined, { type: 'unknown' })).toEqual({
      data: {},
      status: Status.IDLE,
      error: null,
    })
  })

  it('Should handle pending', () => {
    const actual = artistReducer(initialState, {
      type: fetchArtists.pending,
    })

    expect(actual).toEqual({
      data: {},
      status: Status.PENDING,
      error: null,
    })
  })

  it('Should handle fulfilled', () => {
    const actual = artistReducer(initialState, {
      type: fetchArtists.fulfilled,
      payload: mockArtists,
    })

    expect(actual).toEqual({
      data: mockArtists,
      status: Status.FULFILLED,
      error: null,
    })
  })

  it('Should handle rejected', () => {
    const error = new Error('Data not found')

    const actual = artistReducer(initialState, {
      type: fetchArtists.rejected,
      payload: error.message,
    })

    expect(actual).toEqual({
      data: {},
      status: Status.REJECTED,
      error: 'Data not found',
    })
  })
})
