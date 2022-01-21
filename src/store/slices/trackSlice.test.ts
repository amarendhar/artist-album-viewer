import trackReducer, { TrackState, Track, fetchTracks } from './trackSlice'
import mockTracks from 'mocks/mockTracks'
import { Status } from 'types'

describe('track reducer', () => {
  const initialState: TrackState = {
    data: {} as Track,
    status: Status.IDLE,
    error: null,
  }

  it('Should handle initial-state', () => {
    expect(trackReducer(undefined, { type: 'unknown' })).toEqual({
      data: {},
      status: Status.IDLE,
      error: null,
    })
  })

  it('Should handle pending', () => {
    const actual = trackReducer(initialState, {
      type: fetchTracks.pending,
    })

    expect(actual).toEqual({
      data: {},
      status: Status.PENDING,
      error: null,
    })
  })

  it('Should handle fulfilled', () => {
    const actual = trackReducer(initialState, {
      type: fetchTracks.fulfilled,
      payload: mockTracks,
    })

    expect(actual).toEqual({
      data: mockTracks,
      status: Status.FULFILLED,
      error: null,
    })
  })

  it('Should handle rejected', () => {
    const error = new Error('Data not found')

    const actual = trackReducer(initialState, {
      type: fetchTracks.rejected,
      payload: error.message,
    })

    expect(actual).toEqual({
      data: {},
      status: Status.REJECTED,
      error: 'Data not found',
    })
  })
})
