const styles = theme => ({
    formsLayout: {
      display: "flex",
      minHeight: "100%"
    },
    paper: {
      width: 300,
      margin: "auto",
      padding: 20
    },
    error: {
      width: 200,
      color: "black"
    },
    link: {
      textDecoration: "none"
    },
    formDebug: {
      display: "inline-block",
      padding: 10,
      width: 260,
      wordWrap: "break-word",
      overflowWrap: "break-word"
    },
    formError: {
      padding: 10,
      width: "calc(100% - 40)",
      backgroundColor: "red",
      wordWrap: "break-word",
      overflowWrap: "break-word"
    },
    errorMessage: {
      color: "white"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginTop: 10,
      marginBottob: 10
    },
    menu: {
      width: 200
    },
    form: {
      display: "flex",
      flexDirection: "column"
    },
    submitButton: {
      margin: 10
    }
  });
  
  export default styles;
  