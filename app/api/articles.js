import express from 'express';
import _ from 'lodash';

const router = express.Router();

const articles = [];

router.post('/', function (req, res) {
  const data = req.body;
  if (_.isEmpty(data)) {
    res.sendStatus(400);
  } else {
    articles.push(data);
    res.sendStatus(201);
  }
});

router.get('/', function (req, res) {
  res.json(articles);
});

export default router;
