const styles = theme => ({
    commentsList: {
      padding: 10,
      margin: 5
    },
    comment: {
      margin: "10px 0px"
    },
    noComments: {
      display: "flex",
      padding: "10px"
    },
    control: {
      alignSelf: "center"
    },
    commentHeader: {
      display: "flex"
    },
    commentInfo: {
      paddingTop: 2,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    },
    commentBody: {},
    commentFooter: {},
    avatar: {
      margin: "5px 10px 5px 0px"
    },
    link: {
      textDecoration: "none"
    },
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    iconSmall: {
      fontSize: 20
    }
  });
  
  export default styles;
  