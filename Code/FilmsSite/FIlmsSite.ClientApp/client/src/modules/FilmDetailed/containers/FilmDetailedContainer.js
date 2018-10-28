import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import FilmDetailedCard from "./../components/index";
import * as filmDetailedSelectors from "./../selectors/filmDetailedSelectors";
import * as actions from "./../actions/FilmDetailsActions";

class FilmDetailedContainer extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = props;
    this.state = {
      id: params.id,
      editing: false
    };
  }

  handleSaveChanges = (values) => {
    const { detailsUpdateRequest } = this.props;
    detailsUpdateRequest(values);
  };

  componentDidMount() {
    const { detailsRequest } = this.props;
    const { id } = this.state;
    detailsRequest(id);
  }

  render() {
    const { id, editing } = this.state;
    const {
      title,
      year,
      genre,
      director,
      pictureUrl,
      description,
      rating,
      duration,
      metascore,
      storyline,
      isError,
      isLoading
    } = this.props;

    const props = {
      id,
      title,
      year,
      editing,
      genre,
      director,
      pictureUrl,
      description,
      rating,
      duration,
      metascore,
      storyline,
      isError,
      isLoading,
      handleSaveChanges: this.handleSaveChanges
    };
    return <FilmDetailedCard {...props} />;
  }
}

FilmDetailedContainer.propTypes = {
  match: PropTypes.object.isRequired,
  detailsRequest: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string,
  metascore: PropTypes.number.isRequired,
  storyline: PropTypes.string,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

const mapStateToProps = state => ({
  title: filmDetailedSelectors.getTitle(state),
  year: filmDetailedSelectors.getYear(state),
  genre: filmDetailedSelectors.getGenre(state),
  director: filmDetailedSelectors.getDirector(state),
  pictureUrl: filmDetailedSelectors.getPictureUrl(state),
  description: filmDetailedSelectors.getDescription(state),
  rating: filmDetailedSelectors.getRating(state),
  duration: filmDetailedSelectors.getDuration(state),
  metascore: filmDetailedSelectors.getMetascore(state),
  storyline: filmDetailedSelectors.getStoryline(state),
  isError: filmDetailedSelectors.getIsError(state),
  isLoading: filmDetailedSelectors.getIsLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDetailedContainer);
