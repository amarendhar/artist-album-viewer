import React, { useCallback, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { fetchArtists, selectArtist, Artist } from 'store/slices/artistSlice'
import { Status } from 'types'

export const DEBOUNCE_DELAY = 500

type UseSearchReturnProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  onSubmit: () => void
  onSelectArtist: (id: string) => void
  status: Status
  error: string | null | undefined
  text: string
  artists: Artist['data']
  total: number | null | undefined
  selectedArtist: string
}

// ToDo: Add return-type
const useSearch = (): UseSearchReturnProps => {
  const { status, error, data } = useAppSelector(selectArtist)
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')
  const [queryText, setQueryText] = useState('')
  const [selectedArtist, setSelectedArtist] = useState('')

  const onChange = useCallback(
    (e) => {
      setText(e.target.value)
    },
    [setText]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        dispatch(fetchArtists(text))
        setQueryText(text)
      }
    }, DEBOUNCE_DELAY)

    return () => {
      clearTimeout(timer)
    }
  }, [text, dispatch])

  const onClear = useCallback(() => {
    setText('')
  }, [setText])

  const onSelectArtist = useCallback(
    (id) => {
      setSelectedArtist(id)
    },
    [setSelectedArtist]
  )

  const onSubmit = useCallback(() => {
    if (text) {
      dispatch(fetchArtists(text))
    }
  }, [text, dispatch])

  return {
    onChange,
    onClear,
    onSubmit,
    onSelectArtist,
    status,
    error,
    text,
    artists:
      text === queryText && queryText && status === Status.FULFILLED
        ? data?.data || []
        : [],
    total:
      text === queryText && queryText && status === Status.FULFILLED
        ? data?.data?.length
        : null,
    selectedArtist,
  }
}

export default useSearch
