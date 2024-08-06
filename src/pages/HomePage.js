import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerStyled = styled(Container)({
  marginTop: "20px",
  textAlign: "center",
});

const NavLinksStyled = styled("div")({
  marginLeft: "auto",
});

const HomePage = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home Page</Typography>
          <NavLinksStyled>
            <Button color="inherit" component={Link} to="/entry">
              Entry
            </Button>
            <Button color="inherit" component={Link} to="/table">
              Table
            </Button>
            <Button color="inherit" component={Link} to="/chart">
              Chart
            </Button>
          </NavLinksStyled>
        </Toolbar>
      </AppBar>
      <ContainerStyled>
        <Typography variant="h4">Welcome to the Home Page</Typography>
      </ContainerStyled>
    </>
  );
};

export default HomePage;
