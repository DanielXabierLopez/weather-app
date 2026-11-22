const router = require("express").Router();

const {
  getHome,
  getWeather,
} = require("../controllers/weather.controller");

router.get("/", getHome);

router.post("/weather", getWeather);

module.exports = router;