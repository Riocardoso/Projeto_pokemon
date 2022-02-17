const LegendaryModel = require('../models/Legendarymodel');

const controller = {
  index : (request, response) => {
    const pokemon = new LegendaryModel(1 , 'Pokemon Joyce', 'villa do castelo', 'QBD')
    return response.json(pokemon)
  }
}
module.exports = controller;