const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, './sources.json'));
    const stats = JSON.parse(data);
    const playerStats = stats.find(player => player.id === Number(req.params.id));
    if (!playerStats) {
      const err = new Error('Player stats not found');
      err.status = 404;
      throw err;
    }
    res.json(playerStats);
  } catch (e) {
    next(e);
  }
};

router
  .route('/api/v1/sources/:id')
  .get(getStats);

module.exports = router;