import { useState } from 'react'
import { Album } from 'store/slices/albumSlice'
import { Track } from 'store/slices/trackSlice'

type UseHomeReturnProps = {
  setSelectedArtist: React.Dispatch<React.SetStateAction<string>>
  selectedArtist: string
  setSelectedAlbum: React.Dispatch<
    React.SetStateAction<Partial<Album['data'][0]>>
  >
  selectedAlbum: Partial<Album['data'][0]>
  setSelectedTrack: React.Dispatch<
    React.SetStateAction<Partial<Track['data'][0]>>
  >
  selectedTrack: Partial<Track['data'][0]>
}

const useHome = (): UseHomeReturnProps => {
  const [selectedArtist, setSelectedArtist] = useState('')
  const [selectedAlbum, setSelectedAlbum] = useState<Partial<Album['data'][0]>>(
    {}
  )
  const [selectedTrack, setSelectedTrack] = useState<Partial<Track['data'][0]>>(
    {}
  )

  return {
    setSelectedArtist,
    selectedArtist,
    setSelectedAlbum,
    selectedAlbum,
    setSelectedTrack,
    selectedTrack,
  }
}

export default useHome
