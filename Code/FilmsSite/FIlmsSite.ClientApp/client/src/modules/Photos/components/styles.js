const styles = theme => ({
    root: {
      height: 199,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      display: "flex",
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      overflowY: "auto",
      borderRadius: 10
    },
    gallery: {
      display: "flex",
      overflowY: "auto"
    },
    title: {
      color: theme.palette.primary.light
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    photosRoot: {
      margin: 5,
      borderRadius: 5
    }
  });
  
  export default styles;
  