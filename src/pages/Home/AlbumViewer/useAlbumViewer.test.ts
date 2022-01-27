import { renderHook } from 'utils/test-utils-hook'
import { waitFor } from '@testing-library/dom'
import { rest } from 'msw'
import { server } from 'mocks/server'
import useAlbumViewer from './useAlbumViewer'
import mockAlbums from 'mocks/mockAlbums'
import { STATUS } from 'types'

describe('useAlbumViewer', () => {
  const selectedArtist = ''
  const setSelectedAlbum = jest.fn()
  const defaultProps = {
    onSelectAlbum: expect.any(Function),
    status: STATUS.IDLE,
    error: null,
    albums: [],
    total: null,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return initial state', () => {
    const { result } = renderHook(() =>
      useAlbumViewer({ selectedArtist, setSelectedAlbum })
    )

    expect(result.current).toEqual(defaultProps)
  })

  it('Should fetch albums-data onChange of text', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useAlbumViewer({ selectedArtist: 'Eminem', setSelectedAlbum })
    )

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: STATUS.FULFILLED,
      albums: mockAlbums.data,
      total: mockAlbums.data.length,
    })
  })

  it('Should handle error-response from API', async () => {
    // Note: To mock error-responses, refer https://mswjs.io/docs/recipes/mocking-error-responses
    server.use(
      rest.get('/search/album/', (req, res, ctx) => {
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
      useAlbumViewer({ selectedArtist: 'not-found-artist', setSelectedAlbum })
    )

    await waitForNextUpdate()

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: STATUS.REJECTED,
        error: 'Data not found',
      })
    })
  })
})
