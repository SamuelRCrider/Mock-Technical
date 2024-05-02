const usersRouter = require("express").Router();
const { v1: uuid } = require("uuid");

let mockData = require("../utils/mockData");

usersRouter.get("/", (req, res) => {
  res.json(mockData);
});

usersRouter.get("/:id", (req, res) => {
  const mockDataUser = mockData.filter((user) => user.id === req.params.id);
  res.status(200).json(mockDataUser);
});

usersRouter.post("/", (req, res) => {
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

usersRouter.put("/:id", (req, res) => {
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

usersRouter.delete("/:id", (req, res) => {
  mockData = mockData.filter((user) => user.id !== req.params.id);
  res.status(204).end();
});

module.exports = usersRouter;
