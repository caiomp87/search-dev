const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {
  async store(req, res) {
    const { techs, latitude, longitude } = req.query;
    
    const techsArray = parseStringToArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [latitude, longitude]
          },
          $maxDistance: 10000
        }
      }
    })

    return res.json({ devs });
  }
}