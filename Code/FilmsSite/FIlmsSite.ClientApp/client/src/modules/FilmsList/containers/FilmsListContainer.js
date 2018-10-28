import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FilmsList from "./../components/index";
import * as actions from "./../actions/FilmListActions";
import * as filmsListSelectors from "./../selectors/filmsListSelectors";

class FilmsListContainer extends Component {
  componentDidMount() {
    const { filmsRequest } = this.props;
    filmsRequest();
  }

  render() {
    const { films, isLoading } = this.props;

    const props = {
      films,
      isLoading
    };
    return <FilmsList {...props} />;
  }
}

FilmsListContainer.propTypes = {
  filmsRequest: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  films: filmsListSelectors.getFilms(state),
  isLoading: filmsListSelectors.getIsLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsListContainer);
