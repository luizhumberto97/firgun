const About = require('../models/About');

class AboutController {
  async index(req, res) {
    const aboutus = await About.findAll();
    return res.json(aboutus);
  }
}

module.exports = new AboutController();
