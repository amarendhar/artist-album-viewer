import { ENV } from 'types'

/**
 * Middlewares in setupProxy.js file won't work, when deployed on gh-pages,
 *  bcz gh-pages serves only static-content, it doesn't have server like ExpressJS.
 *
 * So absolute API_URL should be given to fetch-method,
 *  i.e. fetch('https://api.deezer.com/search/album/?q=Eminem&output=json') instead of fetch('/search/album/?q=Eminem&output=json')
 *
 * Still there is one more issue, gh-pages will throw CORS-error b/w `https://amarendhar.github.io` and `https://api.deezer.com`
 * Which can't be fixed as gh-pages doesn't have server like ExpressJS.
 *
 * But there is an alternative which is prepend URL with `https://cors-anywhere.herokuapp.com`,
 *  so that it looks like `https://cors-anywhere.herokuapp.com/https://api.deezer.com`,
 *  this makes request through a public CORS proxy,
 *  that sends the request through https://cors-anywhere.herokuapp.com, which forwards the request to `http://api.deezer.com/...` and then receives the response,
 *  the https://cors-anywhere.herokuapp.com backend adds the Access-Control-Allow-Origin header to the response and passes that back to your requesting frontend cod
 *
 * Refer
 *  https://stackoverflow.com/questions/45483759/cannot-load-deezer-api-resources-from-localhost-with-the-fetch-api/45486594#45486594
 */
export const API_URL =
  process.env.NODE_ENV === ENV.PRODUCTION
    ? 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
    : ''
