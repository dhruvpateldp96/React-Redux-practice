# Welcome to What's For Lunch Charleston!

What's For Lunch Charleston is a single page application with Rails API and React client side ([see the API repository](https://github.com/liahwallace1/chs-lunch-finder-api). This app can help people in Charleston pick a lunch restaurant, or it can suggest a place for them.

  - Single page application using React.js.
  - State management with Redux.
  - Displays Charleston restaurants open during lunch hours from Yelp Fusion API
  - Custom filters allow you to filter the data
  - Allows users to add hashtags to help other users make their restaurant selection
  - Utilizes Google Maps API to show location of lunch recommendation

## Video Walkthrough
  [Youtube Video](https://youtu.be/1YC1DSYAXeQ)

## Installation and Usage
  Clone this repository and the [Rails API](https://github.com/liahwallace1/chs-lunch-finder-api), then execute:
  ```
  $ cd chs-lunch-finder-api
  $ bundle install
  $ rails s -p 3001


  $ cd chs-lunch-finder-client
  $ npm install
  $ npm start
  ```

### Filter Lunch Options

  Filter lunch options by selecting available filters. You can select as many filters as you would like. All options are shown when either all or none of the filter choices are selected.

### Adding a Hashtag
  If you would like to give users some more information about a restaurant. You can click the Add Hashtag button. When the modal opens, select one or more of the available hashtags and click the Check button. Close the modal to see the new results.

### Getting a Suggestion
  Click on the Quick Picks link to get a restaurant recommendation. Get a new recommendation by clicking "New Suggestion". See the suggestion's address and location on a map by selecting "Where is it?"


### Tech

  What's For Lunch Charleston Client uses a number of open source projects to work properly:
  * [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces.
  * [Redux](http://redux.js.org/) - State management system for JavaScript apps.
  * [React Router](https://reacttraining.com/react-router/) - A collection of navigational components that compose declaratively with your application.
  * [Redux Thunk middleware](https://www.npmjs.com/package/redux-thunk) - Allows you to write action creators that return a function instead of an action.
  * [Yelp Fusion API](https://www.yelp.com/fusion) - Allows you to connect with data from over 50 million businesses.
  * [Google Maps API](https://developers.google.com/maps/) - Allows you to display and customize Google Maps on your webpage.


  What's For Lunch Charleston itself is open source with a [public repository](https://github.com/liahwallace1/chs-lunch-finder-client)
   on GitHub.

## Contributing

  Bug reports and pull requests are welcome on GitHub at [this project's repository](https://github.com/liahwallace1/chs-lunch-finder-client). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

  This Web Application is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
