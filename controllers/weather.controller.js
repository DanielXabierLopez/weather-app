const axios = require("axios");

const getHome = (req, res) => {
  res.render("index", {
    weather: null,
    error: null,
  });
};

const getWeather = async (req, res) => {
  try {
    const city = req.body.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric&lang=es`
    );

    res.render("index", {
      weather: response.data,
      error: null,
    });
  } catch (error) {
    res.render("index", {
      weather: null,
      error: "Ciudad no encontrada",
    });
  }
};

module.exports = {
  getHome,
  getWeather,
};