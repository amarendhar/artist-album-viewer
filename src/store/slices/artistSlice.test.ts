import artistReducer, { ArtistState, Artist, fetchArtists } from './artistSlice'
import mockArtists from 'mocks/mockArtists'
import { STATUS } from 'types'

describe('artist reducer', () => {
  const initialState: ArtistState = {
    data: {} as Artist,
    status: STATUS.IDLE,
    error: null,
  }

  it('Should handle initial-state', () => {
    expect(artistReducer(undefined, { type: 'unknown' })).toEqual({
      data: {},
      status: STATUS.IDLE,
      error: null,
    })
  })

  it('Should handle pending', () => {
    const actual = artistReducer(initialState, {
      type: fetchArtists.pending,
    })

    expect(actual).toEqual({
      data: {},
      status: STATUS.PENDING,
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
      status: STATUS.FULFILLED,
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
      status: STATUS.REJECTED,
      error: 'Data not found',
    })
  })
})
