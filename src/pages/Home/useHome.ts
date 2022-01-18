import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Artist, fetchArtist, selectArtist } from 'store/slices/artistSlice'

const useHome = () => {
  const { status, error, data } = useAppSelector(selectArtist)
  const dispatch = useAppDispatch()
  const [selectedArtist, setSelectedArtist] = useState<
    null | Artist['data'][0]
  >(null)

  // Fetch on retry.
  const getArtist = useCallback(() => {
    dispatch(fetchArtist('enrique iglesias'))
  }, [dispatch])

  // Fetch on initial-mount.
  useEffect(() => {
    getArtist()
  }, [getArtist])

  const handleSelectArtist = useCallback(() => {}, [])

  return {
    status,
    error,
    data,
    getArtist,
    selectedArtist,
    handleSelectArtist,
  }
}

export default useHome
