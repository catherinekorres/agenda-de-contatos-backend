const User = require("../models/User");
const Contact = require("../models/Contact");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: "contacts",
        include: [{ association: "emails" }, { association: "telephones" }],
      },
    });

    return res.json(user.contacts);
  },

  async show(req, res) {
    const { user_id, contact_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const contact = await Contact.findOne({
      where: {
        id: contact_id,
        user_id,
      },
      include: [{ association: "emails" }, { association: "telephones" }],
    });

    return res.json(contact);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const contact = await Contact.create({
      name,
      user_id,
    });

    return res.json(contact);
  },
  
  async update(req, res) {
    const { user_id, contact_id } = req.params;
    const { name } = req.body;

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

    contact.update({ name });

    return res.json(contact);
  },

  async delete(req, res) {
    const { user_id, contact_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const contact = await Contact.findOne({
      where: {
        id: contact_id,
        user_id,
      },
    });

    await contact.destroy();

    return res.json();
  },
};
