import { useCallback, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { fetchAlbums, selectAlbum, Album } from 'store/slices/albumSlice'
import { STATUS } from 'types'

type UseAlbumViewerProps = {
  selectedArtist: string
  setSelectedAlbum: React.Dispatch<
    React.SetStateAction<Partial<Album['data'][0]>>
  >
}

type UseAlbumViewerReturnProps = {
  onSelectAlbum: (selectedAlbum: Partial<Album['data'][0]>) => void
  status: STATUS
  error: string | null | undefined
  albums: Album['data']
  total: number | null
}

const useAlbumViewer = ({
  selectedArtist,
  setSelectedAlbum,
}: UseAlbumViewerProps): UseAlbumViewerReturnProps => {
  const { status, error, data } = useAppSelector(selectAlbum)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedArtist) {
      dispatch(fetchAlbums(selectedArtist))
    }
  }, [selectedArtist, dispatch])

  const onSelectAlbum = useCallback(
    (selectedAlbum) => {
      setSelectedAlbum(selectedAlbum)
    },
    [setSelectedAlbum]
  )

  const isFetchCompleted = selectedArtist && status === STATUS.FULFILLED

  return {
    onSelectAlbum,
    status,
    error,
    albums: isFetchCompleted ? data?.data || [] : [],
    total: isFetchCompleted ? data?.data?.length : null,
  }
}

export default useAlbumViewer
