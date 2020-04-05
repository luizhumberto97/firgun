const Reason = require('../models/Reason');

class ReasonController {
  async index(req, res) {
    const reasons = await Reason.findAll();
    return res.json(reasons);
  }
}

module.exports = new ReasonController();
