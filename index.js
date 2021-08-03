const bot = require('./src/twitterConnection')
const getDolar = require('./src/apiValue')

const init = async () => {
  const dolarNow = await getDolar() //Valor do dolar agora

  console.log(dolarNow)

  bot.actionOfTheBot(dolarNow) //Inicia o bot que Tweeta
}

setInterval(() => {
  init()
}, 1 * 1.200 * 1000 ) //Tempo de verifição do Dolar (em segundos)