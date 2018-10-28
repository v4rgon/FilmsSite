const styles = theme => ({
    middleWrapper: {
      maxWidth: 1024,
      margin: "auto"
    },
    cardContainer: {
      padding: 5
    },
    label: {
      flexGrow: 1
    },
    filmContainer: {
      marginTop: 64
    },
    error: {
      marginTop: 64,
      padding: 20
    },
    card: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
  
      flex: "0 1 auto",
      width: "100%"
    },
    details: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    cover: {
      minWidth: 144,
      height: 256,
      alignSelf: "flex-start"
    },
    controls: {
      display: "flex",
      alignItems: "center",
      margin: theme.spacing.unit
    },
    button: {
      marginLeft: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      alignSelf: "flex-end"
    },
    root: {
      height: 199,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)"
    },
    title: {
      color: theme.palette.primary.light
    }
  });
  
  export default styles;
  