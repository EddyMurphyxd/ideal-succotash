const { celebrate, Joi, Segments } = require('celebrate');
const vendorService = require('../services/vendor');

const validator = celebrate({
  [Segments.PARAMS]: {
    fancyNumber: Joi.number().unsafe().required(),
  }
})

const handler = (req, res) => {
  const fancyString = vendorService.getString(req.params.fancyNumber);
  res.json({
    data: fancyString
  });
}

module.exports = { validator, handler };