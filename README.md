This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

Use `Node >= v14` to support all the new libraries such as `lint-staged`.
## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run coverage`

To generate the coverage report.
### `npm run type-check`

To check typescript errors.

### `npm run lint-staged`

To run prettier & test-cases for the staged-files.

### API links
  - https://developers.deezer.com/api
  - https://api.deezer.com/search/artist/?q=eminem&output=json
  - https://api.deezer.com/search/artist/?q=eminem&index=0&limit=2&output=json
  - https://api.deezer.com/search/album/?q=eminem&output=json
  - https://api.deezer.com/search/album/?q=eminem&index=0&limit=2&output=json
  - https://api.deezer.com/album/:albumId/tracks

## Deploy github-pages
  - https://create-react-app.dev/docs/deployment/#github-pages
    - Added `homepage: https://<usernmae>.github.io/<repository-name>` i.e.e `homepage: https://amarendhar.github.io/artist-album-viewer` in package.json file.
    - Added `gh-pages` npm-package.
    - Added `predeploy` & `deploy` scripts in `package.json`.
    - `npm run deploy` create a `build-folder` and push it to `gh-pages` branch.
    - `npm run deploy` will use `predeploy-script` to create `build-folder`.
    - `npm run deploy` will create `gh-pages` branch if no already existed & push it with only `build-folder` contents.
    - `gh-pages` branch created by `npm run deploy` will have only `build-folder` contents.

  - https://dev.to/kouts/deploy-storybook-to-github-pages-3bij

## Notes
  - `@reduxjs/toolkit` is used for state-management-library
  - `Test-cases` are covered for all the components & utils, the coverage report can be generated by `npm run coverage`.
  - `Responsive-design` is enabled for all components, which is simple & not a big change.
  - Added `accessibility` to navigate over the search-results & album-results by using keyboard with voiceover.
  - Added `styled-components` npm, and created `ThemProvider` with them which has `space, fontSizes, fontWeights, radii, shadows, palette, breakpoints & mediaQueries`. Added GlobalStyles for Global-CSS.
  - Added `test-utils` for components & hooks.
  - Added [msw](https://mswjs.io/) to mock API's with mock-data for test-cases.
  - Added `jest-styled-components` to test css-rules.
  - Added [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) and created `setupProxy.js` to resolve `CORS` issues.
  - Added `baseUrl` in tsconfig.json to use absolute-paths over relative-paths for importing.
  - Added `husky` to run `type-check & lint-staged` on every commit.
  - Re-installed all libraries with `node-v14.18.1` to support latest versions of libraries such as `lint-staged-v12.1.2`.
  - Added `type-check` to check for `type-errors`.
  - Added `prettier` to format the code.
  - `redux-logger` is installed to watch over store-updates in development mode.