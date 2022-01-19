import React, { useCallback, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { fetchArtists, selectArtist, Artist } from 'store/slices/artistSlice'
import { Status } from 'types'

export const DEBOUNCE_DELAY = 500

type UseSearchProps = {
  setSelectedArtist: React.Dispatch<React.SetStateAction<string>>
}

type UseSearchReturnProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  onSubmit: (e: React.SyntheticEvent) => void
  onSelectArtist: (selectedArtist: string) => void
  status: Status
  error: string | null | undefined
  text: string
  artists: Artist['data']
  total: number | null
}

// ToDo: Add return-type
const useSearch = ({
  setSelectedArtist,
}: UseSearchProps): UseSearchReturnProps => {
  const { status, error, data } = useAppSelector(selectArtist)
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')
  const [queryText, setQueryText] = useState('')

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

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      if (text) {
        dispatch(fetchArtists(text))
      }
    },
    [text, dispatch]
  )

  const onSelectArtist = useCallback(
    (selectedArtist) => {
      setText('')
      setSelectedArtist(selectedArtist)
    },
    [setSelectedArtist]
  )

  const isFetchCompleted =
    text === queryText && queryText && status === Status.FULFILLED

  return {
    onChange,
    onClear,
    onSubmit,
    onSelectArtist,
    status,
    error,
    text,
    artists: isFetchCompleted ? data?.data || [] : [],
    total: isFetchCompleted ? data?.data?.length : null,
  }
}

export default useSearch
