import { useState } from 'react'
import { Album } from 'store/slices/albumSlice'

const useHome = () => {
  const [selectedArtist, setSelectedArtist] = useState('')
  const [selectedAlbum, setSelectedAlbum] = useState<Partial<Album['data'][0]>>(
    {}
  )

  return {
    setSelectedArtist,
    selectedArtist,
    setSelectedAlbum,
    selectedAlbum,
  }
}

export default useHome
