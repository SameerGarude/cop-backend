import express from "express";
import pkg from "body-parser";
const { json } = pkg;
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(json());
app.use(cors());

// Data structures to store city names, distances, and vehicle properties
let cities = [
  { name: "Yapkashnagar", distance: 60 },
  { name: "Lihaspur", distance: 50 },
  { name: "Narmis City", distance: 40 },
  { name: "Shekharvati", distance: 30 },
  { name: "Nuravgram", distance: 20 },
];

let vehicles = [
  { kind: "EV Bike", range: 60, count: 2 },
  { kind: "EV Car", range: 100, count: 1 },
  { kind: "EV SUV", range: 120, count: 1 },
];

// Simulate the fugitive's location
const fugitiveLocation = cities[Math.floor(Math.random() * cities.length)];

// CRUD operations for cities
app.get("/cities", (req, res) => {
  res.json(cities);
});

app.post("/cities", (req, res) => {
  const newCity = req.body;
  cities.push(newCity);
  res.json(newCity);
});

// CRUD operations for vehicles
app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.post("/vehicles", (req, res) => {
  const newVehicle = req.body;
  vehicles.push(newVehicle);
  res.json(newVehicle);
});

// Route to handle cop selection and determine if any cop successfully captured the fugitive
app.post("/cop-selection", (req, res) => {
  const { selectedCity } = req.body;
  const isSuccessful = selectedCity === fugitiveLocation.name;
  res.json({ isSuccessful });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
