import { useState } from 'react'

const useHome = () => {
  const [selectedArtist, setSelectedArtist] = useState('')

  return {
    setSelectedArtist,
    selectedArtist,
  }
}

export default useHome
