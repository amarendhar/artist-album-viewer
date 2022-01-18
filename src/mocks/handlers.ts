import { rest } from 'msw'
import mockArtist from 'mocks/mockArtist'
import mockArtistNotFound from 'mocks/mockArtistNotFound'

/**
 * To mock error-responses, refer https://mswjs.io/docs/recipes/mocking-error-responses
 */
export const handlers = [
  rest.get('/search/artist/', (req, res, ctx) => {
    const artistQueryString = req.url.searchParams.get('q')

    if (artistQueryString === 'not-found-artist') {
      return res(ctx.json(mockArtistNotFound), ctx.delay(150))
    }

    return res(ctx.json(mockArtist), ctx.delay(150))
  }),
]
