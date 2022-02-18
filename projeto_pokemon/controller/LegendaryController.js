const LegendaryService = require('../service/LegendaryService');

const controller = {
  index : (request, response) => {
    const legendariesList = LegendaryService.listLegendaries();
    return response.json(legendariesList)
  }
}
module.exports = controller;