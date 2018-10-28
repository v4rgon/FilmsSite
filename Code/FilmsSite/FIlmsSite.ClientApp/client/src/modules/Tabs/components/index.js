import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { tabsList } from "./../../../constants/tabsList";
import styles from "./styles";
import { Typography } from "../../../../node_modules/@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const TabsItem = ({ classes, label, url }) => (
  <Link className={classes.link} to={url}>
    <Tab className={classes.tab} label={label} />
  </Link>
);

TabsItem.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const HeaderTabs = ({
  classes,
  value,
  isAuthorized,
  usersData,
  open,
  handleMenu,
  handleClose,
  anchorEl
}) => {
  return (
    <AppBar position="fixed" className={classes.root}>
      <Tabs className={classes.tabs} value={value}>
        {tabsList.map((tab, i) => (
          <TabsItem classes={classes} {...tab} key={i} />
        ))}
      </Tabs>
      <div className={classes.usersBar}>
        {isAuthorized && (
          <Typography className={classes.userName}>
            {usersData.userName}
          </Typography>
        )}
        <IconButton
          className={classes.usersIcon}
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={handleClose}
        >
          {isAuthorized && (
            <MenuItem onClick={handleClose}>My account</MenuItem>
          )}
          <Link className={classes.link} to="/login">
            <MenuItem onClick={handleClose}>
              {isAuthorized ? "Log out" : "Login"}
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </AppBar>
  );
};

HeaderTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.any.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  usersData: PropTypes.object,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired
};

export default withStyles(styles)(HeaderTabs);
