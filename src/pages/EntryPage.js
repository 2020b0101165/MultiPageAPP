import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerStyled = styled(Container)({
  marginTop: "20px",
  textAlign: "center",
});

const FormStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "300px",
  margin: "0 auto",
});

const EntryPage = ({ addEntry }) => {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    age: "",
    city: "",
    salary: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    navigate("/table");
  };

  return (
    <ContainerStyled>
      <Typography variant="h4">Entry Page</Typography>
      <FormStyled component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Job"
          name="job"
          value={formData.job}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </FormStyled>
    </ContainerStyled>
  );
};

export default EntryPage;
