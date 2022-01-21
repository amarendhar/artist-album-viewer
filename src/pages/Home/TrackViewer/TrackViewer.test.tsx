import React from 'react'
import { render, screen, waitFor, within } from 'utils/test-utils'
import pick from 'lodash/pick'
import TrackViewer from './index'
import getDuration from 'utils/getDuration'
import mockAlbums from 'mocks/mockAlbums'
import mockTracks from 'mocks/mockTracks'

describe('Track Viewer', () => {
  const commonProps = {
    selectedAlbum: pick(mockAlbums.data[0], ['id', 'title', 'cover']),
  }

  const renderComponent = (customProps = {}) => {
    const props = { ...commonProps, ...customProps }

    return render(<TrackViewer {...props} />)
  }

  it('Should render track-results with track-items, for the given selectedAlbum', async () => {
    renderComponent()

    screen.getByTestId('spinner')

    await waitFor(() => {
      screen.getByTestId('track-results')
    })

    expect(screen.getAllByTestId('track-item').length).toEqual(
      mockTracks.data.length
    )

    screen.getAllByTestId('track-item').forEach((ele, key) => {
      expect(within(ele).getByTestId('track-key').textContent).toEqual(
        String(key + 1)
      )
      expect(within(ele).getByTestId('track-title').textContent).toEqual(
        mockTracks.data[key].title
      )
      expect(within(ele).getByTestId('track-name').textContent).toEqual(
        mockTracks.data[key].artist.name
      )
      expect(within(ele).getByTestId('track-duration').textContent).toEqual(
        getDuration(mockTracks.data[key].duration)
      )
    })
  })

  it('Should render not-found text, when track-results not-found for the query', async () => {
    renderComponent({
      selectedAlbum: {
        ...pick(mockAlbums.data[0], ['id', 'title', 'cover']),
        id: 1234567890,
      },
    })

    await waitFor(() => {
      screen.getByTestId('not-found')
    })

    expect(screen.getByTestId('not-found').textContent).toEqual(
      'Album results not found for 1234567890, try with different albumId'
    )
  })
})
