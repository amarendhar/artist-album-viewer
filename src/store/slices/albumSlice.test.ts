import albumReducer, { AlbumState, Album, fetchAlbums } from './albumSlice'
import mockAlbums from 'mocks/mockAlbums'
import { Status } from 'types'

describe('album reducer', () => {
  const initialState: AlbumState = {
    data: {} as Album,
    status: Status.IDLE,
    error: null,
  }

  it('Should handle initial-state', () => {
    expect(albumReducer(undefined, { type: 'unknown' })).toEqual({
      data: {},
      status: Status.IDLE,
      error: null,
    })
  })

  it('Should handle pending', () => {
    const actual = albumReducer(initialState, {
      type: fetchAlbums.pending,
    })

    expect(actual).toEqual({
      data: {},
      status: Status.PENDING,
      error: null,
    })
  })

  it('Should handle fulfilled', () => {
    const actual = albumReducer(initialState, {
      type: fetchAlbums.fulfilled,
      payload: mockAlbums,
    })

    expect(actual).toEqual({
      data: mockAlbums,
      status: Status.FULFILLED,
      error: null,
    })
  })

  it('Should handle rejected', () => {
    const error = new Error('Data not found')

    const actual = albumReducer(initialState, {
      type: fetchAlbums.rejected,
      payload: error.message,
    })

    expect(actual).toEqual({
      data: {},
      status: Status.REJECTED,
      error: 'Data not found',
    })
  })
})
