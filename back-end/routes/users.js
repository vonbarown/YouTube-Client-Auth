const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users')
const { loginRequired } = require('../auth/helpers')

router.get('/', loginRequired, async (req, res, next) => {
  console.log(req.session);

  try {
    let users = await userQueries.getAllUsers()
    res.json({
      payload: users,
      message: 'All users retrieved',
      error: false
    })
  } catch (error) {
    res.status(500).json({
      payload: null,
      msg: 'Failed retrieving all users',
      error: true
    })
  }
});


module.exports = router;
