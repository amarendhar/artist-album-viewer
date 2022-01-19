import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { fetchAlbums, selectAlbum, Album } from 'store/slices/albumSlice'
import { Status } from 'types'

type UseAlbumViewerProps = {
  selectedArtist: string
}

type UseAlbumViewerReturnProps = {
  status: Status
  error: string | null | undefined
  albums: Album['data']
  total: number | null
}

const useAlbumViewer = ({
  selectedArtist,
}: UseAlbumViewerProps): UseAlbumViewerReturnProps => {
  const { status, error, data } = useAppSelector(selectAlbum)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedArtist) {
      dispatch(fetchAlbums(selectedArtist))
    }
  }, [selectedArtist, dispatch])

  const isFetchCompleted = selectedArtist && status === Status.FULFILLED

  return {
    status,
    error,
    albums: isFetchCompleted ? data?.data || [] : [],
    total: isFetchCompleted ? data?.data?.length : null,
  }
}

export default useAlbumViewer
