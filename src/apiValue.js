const axios = require('axios');

 const getDolar = async () => {

  const response = await axios.get('https://economia.awesomeapi.com.br/json/all/USD-BRL')
  const dolar = response.data.USD.high

  return dolar;
}

module.exports = getDolar