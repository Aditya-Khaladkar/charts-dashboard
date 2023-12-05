export const jsonData = require("../jsondata.json");

const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get("localhost:5000/api/data");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};

module.exports = fetchData;
