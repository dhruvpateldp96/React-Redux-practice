# intuit-ui-craft-demonstration
Test Project for Intuit

## Running the app
Clone this repository and run `npm install`. Then `npm run build` to build the application into dist. Open `dist/index.html` to view the app.


## Things that could be improved but I didn't have the time to do

- Error handling. The app currently does handle errors, but error information isn't shown to the user.
- Not hardcoding API key into the app where it could be stolen, instead we'd use our own server to handle API requests
- Having that server also serve the page with server-side rendering
- Using a CSS preprocessor like LESS for cleaner, maintainable styles (instead of copying them and manually including styles)
- Minifying builds
- Being a little more conservative with our dependencies so the bundled JS size isn't as large (use lodash piecewise, production build of React)
- Writing proper tests for redux reducers/actions, and react components
- Include PropType validations on React components
- Include HTML and CSS file changes to the watch script
- Instead of defaulting location to Mckinney, TX, use the location api to get their coordinates. This would require adding reverse geocoding api calls to get the city name
- Support for celsius
- Better styling for the buttons at the bottom and the alerts
