import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () => {
  return <Circle />
}

export default Spinner

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const Circle = styled.div`
  border: 3px solid #f3f3f3;
  animation: ${spin} 1s linear infinite;
  border-top: 3px solid #555;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
