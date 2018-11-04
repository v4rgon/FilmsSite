import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FilmsCollection from "./../components/index";
import * as actions from "./../actions/FilmsCollectionActions";
import * as filmsCollectionSelectors from "./../selectors/filmsCollectionSelectors";

class FilmsCollectionContainer extends Component {
  componentDidMount() {
    const { filmsCollectionRequest } = this.props;
    filmsCollectionRequest();
  }

  render() {
    const { films, isLoading } = this.props;

    const props = {
      films,
      isLoading
    };
    return <FilmsCollection {...props} />;
  }
}

FilmsCollectionContainer.propTypes = {
  filmsCollectionRequest: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  films: filmsCollectionSelectors.getFilms(state),
  isLoading: filmsCollectionSelectors.getIsLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsCollectionContainer);
