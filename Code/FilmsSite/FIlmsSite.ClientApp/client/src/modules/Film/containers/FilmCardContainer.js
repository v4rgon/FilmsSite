import React, { Component } from "react";
import PropTypes from "prop-types";

import FilmCard from "./../components/index";

class FilmCardContainer extends Component {
  render() {
    const props = {
      ...this.props
    };
    return <FilmCard {...props} />;
  }
}

FilmCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default FilmCardContainer;
