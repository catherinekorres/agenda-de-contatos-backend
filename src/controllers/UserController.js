const User = require("../models/User");
const { show } = require("./EmailController");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async show(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    return res.json(user);
  },

  async update(req, res) {
    const { user_id } = req.params;
    const { email, password } = req.body;

    const user = await User.findByPk(user_id);

    user.update({ email, password });

    return res.json(user);
  },

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    return res.json(user);
  },
};
