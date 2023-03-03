import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </Dialog>
        </>
      </ThemeProvider>
    );
  }
}

export default Success;
