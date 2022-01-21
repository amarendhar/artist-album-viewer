import { renderHook } from 'utils/test-utils-hook'
import { waitFor } from '@testing-library/dom'
import { rest } from 'msw'
import pick from 'lodash/pick'
import { server } from 'mocks/server'
import useTrackViewer from './useTrackViewer'
import mockAlbums from 'mocks/mockAlbums'
import mockTracks from 'mocks/mockTracks'
import { Status } from 'types'

describe('useTrackViewer', () => {
  const selectedAlbum = {}
  const defaultProps = {
    status: Status.IDLE,
    error: null,
    tracks: [],
    total: null,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return initial state', () => {
    const { result } = renderHook(() => useTrackViewer({ selectedAlbum }))

    expect(result.current).toEqual(defaultProps)
  })

  it('Should fetch tracks-data onChange of text', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useTrackViewer({
        selectedAlbum: pick(mockAlbums.data[0], ['id', 'title', 'cover']),
      })
    )

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      tracks: mockTracks.data,
      total: mockTracks.data.length,
    })
  })

  it('Should handle error-response from API', async () => {
    // Note: To mock error-responses, refer https://mswjs.io/docs/recipes/mocking-error-responses
    server.use(
      rest.get('/album/1234567890/tracks', (req, res, ctx) => {
        return res(
          // Send a valid HTTP status code
          ctx.status(403),
          // And a response body, if necessary
          ctx.json({
            errorMessage: `Data not found`,
          })
        )
      })
    )

    const { result, waitForNextUpdate } = renderHook(() =>
      useTrackViewer({
        selectedAlbum: {
          ...pick(mockAlbums.data[0], ['id', 'title', 'cover']),
          id: 1234567890,
        },
      })
    )

    await waitForNextUpdate()

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: Status.REJECTED,
        error: 'Data not found',
      })
    })
  })
})
