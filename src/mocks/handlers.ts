import { rest } from 'msw'
import mockArtists from 'mocks/mockArtists'
import mockArtistNotFound from 'mocks/mockArtistNotFound'
import mockAlbums from 'mocks/mockAlbums'
import mockAlbumNotFound from 'mocks/mockAlbumNotFound'
import mockTracks from 'mocks/mockTracks'
import mockTracksNotFound from 'mocks/mockTracksNotFound'

/**
 * To mock error-responses, refer https://mswjs.io/docs/recipes/mocking-error-responses
 */
export const handlers = [
  rest.get('/search/artist/', (req, res, ctx) => {
    const artistQueryString = req.url.searchParams.get('q')

    if (artistQueryString === 'not-found-artist') {
      return res(ctx.json(mockArtistNotFound), ctx.delay(150))
    }

    return res(ctx.json(mockArtists), ctx.delay(150))
  }),

  rest.get('/search/album/', (req, res, ctx) => {
    const albumQueryString = req.url.searchParams.get('q')

    if (albumQueryString === 'not-found-artist') {
      return res(ctx.json(mockAlbumNotFound), ctx.delay(150))
    }

    return res(ctx.json(mockAlbums), ctx.delay(150))
  }),

  rest.get('/album/:albumId/tracks', (req, res, ctx) => {
    const { albumId } = req.params

    if (albumId === '1234567890') {
      return res(ctx.json(mockTracksNotFound), ctx.delay(150))
    }

    return res(ctx.json(mockTracks), ctx.delay(150))
  }),
]
