import { renderHook, act } from 'utils/test-utils-hook'
import { waitFor } from '@testing-library/dom'
import { rest } from 'msw'
import { server } from 'mocks/server'
import useArtistViewer, { DEBOUNCE_DELAY } from './useArtistViewer'
import mockArtists from 'mocks/mockArtists'
import { Status } from 'types'

describe('useArtistViewer', () => {
  const setSelectedArtist = jest.fn()
  const defaultProps = {
    onChange: expect.any(Function),
    onClear: expect.any(Function),
    onSubmit: expect.any(Function),
    onSelectArtist: expect.any(Function),
    status: Status.IDLE,
    error: null,
    text: '',
    artists: [],
    total: null,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return initial state', () => {
    const { result } = renderHook(() => useArtistViewer({ setSelectedArtist }))

    expect(result.current).toEqual(defaultProps)
  })

  it('Should fetch artists-data onChange of text', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useArtistViewer({ setSelectedArtist })
    )

    act(() => {
      result.current.onChange({ target: { value: 'Eminem' } })
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.PENDING,
      text: 'Eminem',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Eminem',
      artists: mockArtists.data,
      total: mockArtists.data.length,
    })
  })

  it('Should fetch artists-data only once with last-updated-text, when multiple times text is changed within DEBOUNCE_DELAY', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useArtistViewer({ setSelectedArtist })
    )

    act(() => {
      result.current.onChange({ target: { value: 'Eminem' } })

      setTimeout(() => {
        result.current.onChange({ target: { value: 'Eminem Eminem' } })
      }, DEBOUNCE_DELAY * 1 - 50)

      setTimeout(() => {
        result.current.onChange({ target: { value: 'Eminem Eminem Eminem' } })
      }, DEBOUNCE_DELAY * 2 - 50)
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      text: 'Eminem Eminem',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      text: 'Eminem Eminem Eminem',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.PENDING,
      text: 'Eminem Eminem Eminem',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Eminem Eminem Eminem',
      artists: mockArtists.data,
      total: mockArtists.data.length,
    })
  })

  it('Should invoke setSelectedArtist, when an artist-item is selected from the list', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useArtistViewer({ setSelectedArtist })
    )

    act(() => {
      result.current.onChange({ target: { value: 'Eminem' } })
    })

    await waitForNextUpdate()
    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Eminem',
      artists: mockArtists.data,
      total: mockArtists.data.length,
    })

    act(() => {
      result.current.onSelectArtist(mockArtists.data[0].id)
    })

    expect(setSelectedArtist).toHaveBeenCalledWith(mockArtists.data[0].id)
  })

  it('Should handle error-response from API', async () => {
    // Note: To mock error-responses, refer https://mswjs.io/docs/recipes/mocking-error-responses
    server.use(
      rest.get('/search/artist/', (req, res, ctx) => {
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
      useArtistViewer({ setSelectedArtist })
    )

    act(() => {
      result.current.onChange({ target: { value: 'Eminem' } })
    })

    await waitForNextUpdate()

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: Status.REJECTED,
        error: 'Data not found',
        text: 'Eminem',
      })
    })
  })
})
