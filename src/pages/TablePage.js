import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerStyled = styled(Container)({
  marginTop: "20px",
});

const TableStyled = styled(Table)({
  minWidth: 650,
});

const TablePage = ({ entries }) => {
  return (
    <ContainerStyled>
      <Typography variant="h4" gutterBottom>
        Table Page
      </Typography>
      <TableContainer component={Paper}>
        <TableStyled>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.job}</TableCell>
                <TableCell>{entry.age}</TableCell>
                <TableCell>{entry.city}</TableCell>
                <TableCell>{entry.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainer>
    </ContainerStyled>
  );
};

export default TablePage;
