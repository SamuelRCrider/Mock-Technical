const express = require("express");
const cors = require("cors");
const { v1: uuid } = require("uuid");
const app = express();
app.use(cors());
app.use(express.json());

let mockData = require("./utils/mockData");

app.get("/users", (req, res) => {
  res.json(mockData);
});

app.get("/users/:id", (req, res) => {
  const mockDataUser = mockData.filter((user) => user.id === req.params.id);
  res.status(200).json(mockDataUser);
});

app.post("/users", (req, res) => {
  const body = req.body;

  const newUser = {
    id: uuid(),
    name: body.name,
    dateOfBirth: body.dateOfBirth,
    ssn: body.ssn,
    gender: body.gender,
    occupation: body.occupation,
  };

  mockData.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const body = req.body;

  const updatedUser = {
    id: req.params.id,
    name: body.name,
    dateOfBirth: body.dateOfBirth,
    ssn: body.ssn,
    gender: body.gender,
    occupation: body.occupation,
  };

  mockData = mockData.filter((user) => user.id !== req.params.id);
  mockData.push(updatedUser);
  res.status(200).json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  mockData = mockData.filter((user) => user.id !== req.params.id);
  res.status(204).end();
});

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
