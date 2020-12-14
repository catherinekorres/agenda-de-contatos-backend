const User = require('../models/User');
const Contact = require('../models/Contact');
const Email = require('../models/Email');

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
       include: { association: 'emails' } 
    });

    return res.json(contact.emails);
  },

  async show(req, res) {
    const { user_id, contact_id, email_id } = req.params;

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

    const email = await Email.findOne({
      where: { 
        id: email_id,
        contact_id
       }
    });

    return res.json(email);
  },

  async store(req, res) {
    const { user_id, contact_id } = req.params;
    const { email } = req.body;

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

    const created_email = await Email.create({
      email,
      contact_id
    });

    return res.json(created_email);
  },
  
  async update(req, res) {
    const { user_id, contact_id, email_id } = req.params;
    const { email } = req.body;

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

    const updatedEmail = await Email.findOne({
      where: { 
        id: email_id,
        contact_id
       }
    });

    updatedEmail.update({ email });

    return res.json(updatedEmail);
  },

  async delete(req, res) {
    const { user_id, contact_id, email_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const email = await Email.findOne({
      where: { 
        id: email_id,
        contact_id
       }
    });

    await email.destroy();

    return res.json();
  }
};