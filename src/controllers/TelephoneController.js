const User = require('../models/User');
const Contact = require('../models/Contact');
const Telephone = require('../models/Telephone');
const TelephoneType = require('../models/TelephoneType');

module.exports = {
  async index(req, res) {
    const { user_id, contact_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const contact = await Contact.findOne({
      where: { 
        id: contact_id,
        user_id
       },
       include: { association: 'telephones' } 
    });

    return res.json(contact.telephones);
  },

  async show(req, res) {
    const { user_id, contact_id, telephone_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const contact = await Contact.findOne({
      where: { 
        id: contact_id,
        user_id
       }
    });

    if (!contact) {
      return res.status(400).json({ error: 'Contact not found' });
    }

    const telephone = await Telephone.findOne({
      where: { 
        id: telephone_id,
        contact_id
       }
    });

    return res.json(telephone);
  },

  async store(req, res) {
    const { user_id, contact_id } = req.params;
    const { telephone, telephone_type_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const contact = await Contact.findOne({
      where: { 
        id: contact_id,
        user_id
       }
    });

    if (!contact) {
      return res.status(400).json({ error: 'Contact not found' });
    }

    const created_telephone = await Telephone.create({
      telephone,
      telephone_type_id,
      contact_id
    });

    return res.json(created_telephone);
  },
  
  async update(req, res) {
    const { user_id, contact_id, telephone_id } = req.params;
    const { telephone, telephone_type_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const contact = await Contact.findOne({
      where: { 
        id: contact_id,
        user_id
       }
    });

    if (!contact) {
      return res.status(400).json({ error: 'Contact not found' });
    }

    const updatedTelephone = await Telephone.findOne({
      where: { 
        id: telephone_id,
        contact_id
       }
    });

    updatedTelephone.update({ telephone, telephone_type_id });

    return res.json(updatedTelephone);
  },

  async delete(req, res) {
    const { user_id, contact_id, telephone_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const telephone = await Telephone.findOne({
      where: { 
        id: telephone_id,
        contact_id
       }
    });

    await telephone.destroy();

    return res.json();
  }
};