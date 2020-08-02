var express = require('express');
var router = express.Router();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const moment = require('moment');
const path = require('path');
const auth = require('../utils/authentication');
const controllers = require('../controllers');

//SEQUELIZE TRANSACTION
const config = require('../config');
const sequelize = config.sequelize;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/* User Endpoint */


router.get('/users', async function (req, res, next) {
  let result = await models.User.findAll();
  res.send(result);
});
router.post('/user', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    result = await models.User.create(data);
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

router.get('/accounttypes', async function (req, res, next) {
  let result = await models.AcountType.findAll();
  res.send(result);
});
router.post('/accounttype', async function (req, res, next) {
  let rawdata = req.body;
  let data = {};
  try {
    let result;
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        data[key] = rawdata[key];
      }
    }
    result = await models.AcountType.create(data);
    res.send({ status: 'OK', data: result });
  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});
router.get('/staff', async function (req, res) {
  let staffid = req.query.staffid;
  let data;
  if (!isNaN(staffid)) {
    staffid = parseInt(staffid);
    data = await models.Staff.findAll({
      where: { staffid: staffid },
      include: [models.StaffType]
    });
  }  else {
    data = await models.Staff.findAll({ include: [models.StaffType] });
  }

  res.send(data);
});
router.post('/staffmember', async function (req, res) {
  let rawdata = req.body;
  let data = {};
  try {
      for (key in rawdata) {
          if (rawdata[key] !== '') {
              data[key] = rawdata[key];
          }
      }
      let result;
      if (rawdata.staffId) {
          result = await models.Staff.update(data, { where: { staffId: data.staffId } });
      } else {
          result = await models.Staff.create(data);
      }
      if (result) {
          res.send({ status: 'OK', data: result });
      }
  } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
  }
});


router.get('/stafftypes', async function (req, res) {
  let stafftypes = await models.StaffType.findAll();
  res.send(stafftypes);
});
router.get('/staffmember', async function (req, res) {
  let staffid = req.query.staffid;
  if (!staffid) {
      return res.status(400).send('Please supply a staff id');
  }
  staffid = parseInt(staffid);
  let staffMember = await models.Staff.findOne({ where: { staffId: staffid } });
  res.send(staffMember);
});


module.exports = router;
