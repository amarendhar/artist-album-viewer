import { useState } from 'react'
import { Album } from 'store/slices/albumSlice'

type UseHomeReturnProps = {
  setSelectedArtist: React.Dispatch<React.SetStateAction<string>>
  selectedArtist: string
  setSelectedAlbum: React.Dispatch<
    React.SetStateAction<Partial<Album['data'][0]>>
  >
  selectedAlbum: Partial<Album['data'][0]>
}

const useHome = (): UseHomeReturnProps => {
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
