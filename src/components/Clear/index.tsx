import React from 'react'
import styled from 'styled-components'

type ClearProps = {
  onClear?: () => void
  color?: string
}

const Clear = ({ onClear = () => {}, color = '#888' }: ClearProps) => {
  return (
    <ClearButton
      data-testid="search-clear"
      type="button"
      onClick={onClear}
      color={color}
    >
      X
    </ClearButton>
  )
}

export default Clear

const ClearButton = styled.button<{ color: string }>`
  position: absolute;
  top: 0;
  right: 0;

  border: 0;
  border-radius: 50%;
  padding: 12px 16px;

  background-color: transparent;
  color: ${({ color }) => color};
  font-size: 25px;
  cursor: pointer;
`
