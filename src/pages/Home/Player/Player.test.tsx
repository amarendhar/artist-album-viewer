import mockTracks from 'mocks/mockTracks'
import React from 'react'
import pick from 'lodash/pick'
import { render, screen } from 'utils/test-utils'
import Player from '.'

describe('Player', () => {
  const commonProps = {
    selectedTrack: pick(mockTracks.data[0], ['title', 'preview']),
  }

  const renderComponent = (customProps = {}) => {
    const props = { ...commonProps, ...customProps }

    return render(<Player {...props} />)
  }

  it('Should render audio-player for the given selectedTrack', () => {
    renderComponent()

    expect(screen.getByTestId('player-title').textContent).toEqual(
      commonProps.selectedTrack.title
    )
    expect(screen.getByTestId('player-audio')).toHaveAttribute(
      'src',
      commonProps.selectedTrack.preview
    )
    expect(screen.getByTestId('player-audio')).toHaveAttribute('controls', '')
    expect(screen.getByTestId('player-audio')).toHaveAttribute('autoplay', '')
  })
})
