import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Auth from "./../../../services/Auth";

import Rating from "../components";
import * as actions from "./../actions/RatingActions";
import * as ratingSelectors from "./../selectors/ratingSelectors";

class RatingContainer extends React.Component {
  componentDidMount() {
    const { ratingGetRequest, filmid } = this.props;
    ratingGetRequest(filmid);
  }

  onRemoveRate = () => {
    const { ratingRemoveRequest, filmid } = this.props;
    ratingRemoveRequest(filmid);
  };

  onRate = ({ rating }) => {
    const { ratingUpdateRequest, filmid } = this.props;
    ratingUpdateRequest(filmid, rating);
  };

  render() {
    const { filmid, rating, alreadyRated, isLoading, usersRating } = this.props;
    const isAuthorized = Auth.isSignedIn();
    const props = {
      filmid,
      isLoading,
      rating,
      rate: this.onRate,
      remove: this.onRemoveRate,
      alreadyRated,
      usersRating,
      isAuthorized
    };
    return <Rating {...props} />;
  }
}

RatingContainer.propTypes = {
  ratingGetRequest: PropTypes.func.isRequired,
  ratingRemoveRequest: PropTypes.func.isRequired,
  ratingUpdateRequest: PropTypes.func.isRequired,
  alreadyRated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filmid: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  usersRating: PropTypes.number
};

const mapStateToProps = state => ({
  rating: ratingSelectors.getRating(state),
  alreadyRated: ratingSelectors.getAlreadyRated(state),
  isLoading: ratingSelectors.getIsLoading(state),
  usersRating: ratingSelectors.getUsersRating(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingContainer);
