import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerStyled = styled(Container)({
  marginTop: "20px",
  textAlign: "center",
});

const ChartStyled = styled(BarChart)({
  margin: "0 auto",
});

const ChartPage = ({ entries }) => {
  const data = entries.map((entry) => ({
    name: entry.name,
    salary: parseInt(entry.salary),
  }));

  return (
    <ContainerStyled>
      <Typography variant="h4" gutterBottom>
        Chart Page
      </Typography>
      <ChartStyled width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="salary">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.salary < 20000
                  ? "red"
                  : entry.salary > 100000
                  ? "green"
                  : "#8884d8"
              }
            />
          ))}
        </Bar>
      </ChartStyled>
    </ContainerStyled>
  );
};

export default ChartPage;
