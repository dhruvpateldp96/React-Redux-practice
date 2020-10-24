import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Icon, Button} from 'semantic-ui-react';
import { setRecommendation, toggleMap, updateMapWidth } from '../actions/recommendationActions';
import { ConnectedContainer } from './Container';
import './Recommendation.css';

class Recommendation extends Component {

  componentDidMount() {
    this.props.recommendation.map_visible === true ? this.props.dispatch(toggleMap()) : null
    window.addEventListener('resize', () => this.props.dispatch(updateMapWidth()));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.props.dispatch(updateMapWidth()));
  }

  handleNewRecommendation() {
    let restaurant = this.props.restaurantData[Math.floor(Math.random()*this.props.restaurantData.length)]
    this.props.dispatch(setRecommendation(restaurant))
    this.props.recommendation.map_visible === true ? this.props.dispatch(toggleMap()) : null
  }

  handleMapToggle() {
    this.props.dispatch(toggleMap())
    window.scrollTo(0,document.body.scrollHeight)
  }

  render() {
    const restaurant = this.props.recommendation.restaurant

    return (
    <div className="recom-container">
        <div className="recom-info">
          <div className="recom-intro">
            <h1>{this.props.recommendation.current_intro}<a target="_blank" rel="noopener noreferrer" href={restaurant.yelp_url} className="recommended-restaurant">{restaurant.name}</a>!</h1>
          </div>
        <br />
          <Grid className="restaurant-info" columns={2} stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column className="restaurant-type">
                <div><Icon circular inverted size='large' color='teal' name='food' /></div>
                <div><p>{restaurant.category_list}</p></div>
              </Grid.Column>

              <Grid.Column className="restaurant-price">
                <div><Icon circular inverted size='large' color='olive' name='currency' /></div>
                <p>{restaurant.price}</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column className="restaurant-takeout">
                <div>{restaurant.takeout ? <Icon circular inverted size='large' color='purple' name='thumbs up' /> : <Icon circular inverted size='large' color='orange' name='thumbs down' />}</div>
                <div><p>Takeout</p></div>
              </Grid.Column>

              <Grid.Column className="restaurant-delivery">
                <div>{restaurant.delivery ? <Icon circular inverted size='large' color='purple' name='thumbs up' /> : <Icon circular inverted size='large' color='orange' name='thumbs down' />}</div>
                <div><p>Delivery</p></div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="recom-buttons">
            <Button className="recom-button" size="large" color="red" onClick={() => this.handleNewRecommendation()}><Icon name='refresh' />New Suggestion</Button>
            <Button className="recom-button" size="large" color="blue" onClick={() => this.handleMapToggle()}><Icon name='map pin' />Where is it?</Button>
          </div>
        </div>

        <div className="map-toggler" >
          {this.props.recommendation.map_visible ? <ConnectedContainer /> : null}
        </div>

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantData,
    recommendation: state.recommendation
  }
}


export const ConnectedRecommendation = connect(mapStateToProps)(Recommendation)
