import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
