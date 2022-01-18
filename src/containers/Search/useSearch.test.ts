import { renderHook, act } from 'utils/test-utils-hook'
import { rest } from 'msw'
import { server } from 'mocks/server'
import mockArtist from 'mocks/mockArtist'
import useSearch, { DEBOUNCE_DELAY } from './useSearch'
import { Status } from 'types'
import { waitFor } from '@testing-library/dom'

describe('useSearch', () => {
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
    selectedArtist: '',
  }

  it('Should return initial state', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current).toEqual(defaultProps)
  })

  it('Should fetch artists-data onChange of text', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearch())

    act(() => {
      result.current.onChange({ target: { value: 'Prince' } })
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.PENDING,
      text: 'Prince',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Prince',
      artists: mockArtist.data,
      total: mockArtist.data.length,
    })
  })

  it('Should fetch artists-data only once with last-updated-text, when multiple times text is changed within DEBOUNCE_DELAY', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearch())

    act(() => {
      result.current.onChange({ target: { value: 'Prince' } })

      setTimeout(() => {
        result.current.onChange({ target: { value: 'Prince Prince' } })
      }, DEBOUNCE_DELAY * 1 - 50)

      setTimeout(() => {
        result.current.onChange({ target: { value: 'Prince Prince Prince' } })
      }, DEBOUNCE_DELAY * 2 - 50)
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      text: 'Prince Prince',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      text: 'Prince Prince Prince',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.PENDING,
      text: 'Prince Prince Prince',
    })

    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Prince Prince Prince',
      artists: mockArtist.data,
      total: mockArtist.data.length,
    })
  })

  it('Should update selectedArtist, when an artist-item is selected from the list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearch())

    act(() => {
      result.current.onChange({ target: { value: 'Prince' } })
    })

    await waitForNextUpdate()
    await waitForNextUpdate()

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Prince',
      artists: mockArtist.data,
      total: mockArtist.data.length,
    })

    act(() => {
      result.current.onSelectArtist(mockArtist.data[0].id)
    })

    expect(result.current).toEqual({
      ...defaultProps,
      status: Status.FULFILLED,
      text: 'Prince',
      artists: mockArtist.data,
      selectedArtist: mockArtist.data[0].id,
      total: mockArtist.data.length,
    })
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

    const { result, waitForNextUpdate } = renderHook(() => useSearch())

    act(() => {
      result.current.onChange({ target: { value: 'Prince' } })
    })

    await waitForNextUpdate()

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: Status.REJECTED,
        error: 'Data not found',
        text: 'Prince',
      })
    })
  })
})
