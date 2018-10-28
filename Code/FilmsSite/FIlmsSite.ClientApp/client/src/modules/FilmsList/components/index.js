import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import FilmCardContainer from "../../Film/containers/FilmCardContainer";
import classNames from "classnames";

import LoadingSpinner from "./../../LoadingSpinner/index";

const FilmsList = ({ classes, films, isLoading }) => (
	<div className={classNames(classes.filmsContainer, classes.middleWrapper)}>
		{isLoading ? (
			<LoadingSpinner />
		) : (
			films.map(film => <FilmCardContainer key={film.id} {...film} />)
		)}
	</div>
);

FilmsList.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	films: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(FilmsList);
