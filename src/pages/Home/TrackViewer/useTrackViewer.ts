import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { fetchTracks, selectTrack, Track } from 'store/slices/trackSlice'
import { Album } from 'store/slices/albumSlice'
import { Status } from 'types'

type UseTrackViewerProps = {
  selectedAlbum: Partial<Album['data'][0]>
}

type UseTrackViewerReturnProps = {
  status: Status
  error: string | null | undefined
  tracks: Track['data']
  total: number | null
}

const useTrackViewer = ({
  selectedAlbum,
}: UseTrackViewerProps): UseTrackViewerReturnProps => {
  const { status, error, data } = useAppSelector(selectTrack)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedAlbum?.id) {
      dispatch(fetchTracks(String(selectedAlbum?.id)))
    }
  }, [selectedAlbum?.id, dispatch])

  const isFetchCompleted = selectedAlbum?.id && status === Status.FULFILLED

  return {
    status,
    error,
    tracks: isFetchCompleted ? data?.data || [] : [],
    total: isFetchCompleted ? data?.data?.length : null,
  }
}

export default useTrackViewer
