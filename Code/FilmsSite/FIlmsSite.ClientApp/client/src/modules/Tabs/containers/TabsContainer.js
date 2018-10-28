import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import HeaderTabs from "./../components/index";
import { tabsList } from "./../../../constants/tabsList";

import Auth from "./../../../services/Auth";
import Session from "../../../stores/Session";

class TabsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const selectedTab = tabsList.findIndex(
      tab => tab.url === this.props.location.pathname
    );
    const isAuthorized = Auth.isSignedIn();
    const usersData = Session.getUsersData();
    const { anchorEl } = this.state;

    const props = {
      value: selectedTab === -1 ? false : selectedTab,
      isAuthorized,
      usersData,
      anchorEl,
      handleMenu: this.handleMenu,
      handleClose: this.handleClose,
      open: Boolean(anchorEl)
    };

    return <HeaderTabs {...props} />;
  }
}

TabsContainer.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(TabsContainer);
