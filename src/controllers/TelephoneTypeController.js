const TelephoneType = require('../models/TelephoneType');
const { show } = require('./ContactController');

module.exports = {
  async index(req, res) {
    const telephoneTypes = await TelephoneType.findAll();

    return res.json(telephoneTypes);
  },

  async show(req,res) {
    const { telephone_type_id } = req.params;

    const telephoneType = await TelephoneType.findByPk(telephone_type_id);

    return res.json(telephoneType);
  },

  async store(req, res) {
    const { name } = req.body;

    const telephoneType = await TelephoneType.create({ name });

    return res.json(telephoneType);
  },
  
  async update(req, res) {
    const { telephone_type_id } = req.params;
    const { name } = req.body;

    const telephoneType = await TelephoneType.findByPk(telephone_type_id);

    telephoneType.update({ name });

    return res.json(telephoneType);
  },

  async delete(req,res) {
    const { telephone_type_id } = req.params;

    const telephoneType = await TelephoneType.findByPk(telephone_type_id);

    await telephoneType.destroy();

    return res.json();
  },
};