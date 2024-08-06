import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerStyled = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20vh",
});

const FormStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "300px",
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <ContainerStyled>
      <Typography variant="h4">Login</Typography>
      <FormStyled>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </FormStyled>
    </ContainerStyled>
  );
};

export default LoginPage;
