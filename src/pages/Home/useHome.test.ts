import { renderHook, act } from 'utils/test-utils-hook'
import pick from 'lodash/pick'
import useHome from './useHome'
import mockArtists from 'mocks/mockArtists'
import mockAlbums from 'mocks/mockAlbums'

describe('useHome', () => {
  const defaultProps = {
    setSelectedArtist: expect.any(Function),
    selectedArtist: '',
    setSelectedAlbum: expect.any(Function),
    selectedAlbum: {},
    setSelectedTrack: expect.any(Function),
    selectedTrack: {},
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return initial state', () => {
    const { result } = renderHook(() => useHome())

    expect(result.current).toEqual(defaultProps)
  })

  it('Should update selectedArtist, when an artist is selected ', () => {
    const { result } = renderHook(() => useHome())

    act(() => {
      result.current.setSelectedArtist(mockArtists.data[0].name)
    })

    expect(result.current).toEqual({
      ...defaultProps,
      selectedArtist: mockArtists.data[0].name,
    })
  })

  it('Should update selectedAlbum, when an album is selected ', () => {
    const { result } = renderHook(() => useHome())

    act(() => {
      result.current.setSelectedAlbum(
        pick(mockAlbums.data[0], ['id', 'title', 'cover'])
      )
    })

    expect(result.current).toEqual({
      ...defaultProps,
      selectedAlbum: pick(mockAlbums.data[0], ['id', 'title', 'cover']),
    })
  })

  it('Should update selectedTrack, when a track is selected ', () => {
    const { result } = renderHook(() => useHome())

    act(() => {
      result.current.setSelectedAlbum(
        pick(mockArtists.data[0], ['title', 'preview'])
      )
    })

    expect(result.current).toEqual({
      ...defaultProps,
      selectedAlbum: pick(mockArtists.data[0], ['title', 'preview']),
    })
  })
})
