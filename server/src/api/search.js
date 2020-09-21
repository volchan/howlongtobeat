const express = require('express');
const hltb = require('howlongtobeat');

const router = express.Router();
const hltbService = new hltb.HowLongToBeatService();

router.get('/', async (req, res) => {
  const searchTerm = req.query.term;
  const hltbRes = await hltbService.search(searchTerm);

  res.send(hltbRes);
});

module.exports = router;
