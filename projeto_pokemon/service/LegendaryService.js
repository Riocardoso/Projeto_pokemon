const LegendaryModel = require('../models/LegendaryModel');

const LegendaryService = {
  listLegendaries: () => {
    const pokemon1 = new LegendaryModel(1 , 'Pokemon Joyce', 'villa do castelo', 'QBD');
    const pokemon2 = new LegendaryModel(1 , 'Pokemon Romario', 'villa do castelo', 'QBD');
    return [pokemon1, pokemon2]
  }
}

module.exports = LegendaryService;