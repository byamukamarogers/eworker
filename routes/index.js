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

module.exports = function (passport) {
  //---------AUTHENTICATION ROUTES---------------------
  router.get('/', auth.authenticate, function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });


  router.get('/login', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'views', 'login.html'));
  });

  router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
  }), async function (req, res) {
    res.redirect('/');
  });

  router.get('/login', async function (req, res, next) {
    try {
      await models.sequelize.authenticate();
      console.log('Connection Successfull!');
    } catch (err) {
      console.log('Failed to get connection');
      console.log(err);
    }
    res.sendFile(path.join(process.cwd(), 'views', 'login.html'));
  });

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  /* User Endpoint */


  router.get('/users', auth.authenticate, async function (req, res, next) {
    let result = await models.User.findAll();
    res.send(result);
  });
  router.post('/user', async function (req, res, next) {
    let rawdata = req.body;
    rawdata.createdBy = req.session.passport.user.staffId;
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
    rawdata.createdBy = req.session.passport.user.staffId;
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
  //Modified to join Users to Staff
  router.get('/users', async function (req, res) {
    let id = req.query.id;
    let data;
    if (!isNaN(id)) {
      data = await models.User.findAll({
        include: [{
          model: models.Staff,
          where: { healthUnitId: id }
        }]
      });
    }
    else {
      data = await models.User.findAll({ include: [models.Staff] });
    }
    let results = [];
    data.forEach(dataitem => {
      dataitem.dataValues.staffFullName = dataitem.Staff.firstName + ', ' + dataitem.Staff.lastName;
      dataitem.dataValues.lastName = dataitem.Staff.lastName;
      dataitem.dataValues.firstName = dataitem.Staff.firstName;
      dataitem.dataValues.email = dataitem.Staff.email;
      dataitem.dataValues.departmentId = dataitem.Staff.departmentId;
      dataitem.dataValues.phone1 = dataitem.Staff.phone1;
      dataitem.dataValues.userId = dataitem.userId;
      dataitem.dataValues.healthUnitId = dataitem.Staff.healthUnitId;
      //results.push({ ...dataitem.get({ flat: true }) });
    })
    res.send(data);
  });
  router.get('/usersearch', async function (req, res) {
    let searchtype = req.query.searchtype;
    let val = req.query.val;
    let data;

    switch (searchtype) {
      case 'userid':
        data = await models.User.findAll({ where: { userid: val } });
        break;
      case 'name':
        data = await models.User.findAll({ where: { [Op.or]: [{ firstname: { [Op.like]:  `%${val}%` } }, { lastname: { [Op.like]:  `%${val}%`} }] } });
        break;

      case 'phoneno':
        data = await models.User.findAll({ where: { [Op.or]: [{ phone1: { [Op.like]:  `%${val}%` } }, { phone2: { [Op.like]:  `%${val}%` } }] } });
        break;

      default:
        return res.status(500).send('Invalid search parameters');
    }


    res.send(data);
  });

  router.get('/userroles', async function (req, res) {
    let userroles = await models.UserRole.findAll();
    res.send(userroles);
  });

  router.put('/userpermissions', async function (req, res) {
    let records = req.body;
    let currentuser = await models.User.findOne({ where: { userId: req.session.passport.user } });
    if (!currentuser) {
      console.log('Failed to find current user');
      return res.status(500).send('Failed to find current user');
    }
    records = records.map(permission => {
      permission.createdBy = currentuser.staffId;
      return permission;
    });
    try {
      records.forEach(async (record) => {
        let result = await models.UserPermission.update(record, { where: { staffId: currentuser.staffId, roleId: record.roleId } });
      });
      res.send({ success: true, data: records });
    } catch (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }
  });

  /**
   * Used to load up permissions. If they are missing for a user, add all permission types with defaults 
   */
  router.get('/userpermissions', async function (req, res) {
    if (req.query.staffid) {
      let currentuser = await models.User.findOne({ where: { userId: req.session.passport.user.userId } });
      if (!currentuser) return res.send([]);
      let staffid = parseInt(req.query.staffid);
      let userpermissions = await models.UserPermission.findAll({ where: { staffId: staffid }, include: [models.UserRole] });
      if (userpermissions.length === 0) {
        let user = await models.User.findOne({ where: { staffId: staffid } });
        if (user) {
          let userroles = await models.UserRole.findAll();
          userroles.forEach(async (role) => {
            let userpermission = await models.UserPermission.create({
              staffId: staffid,
              roleId: role.roleId,
              roleName: role.roleName,
              readOnly: false,
              write: false,
              edit: false,
              createdDate: new Date(),
              createdBy: currentuser.staffId
            });
            userpermissions.push(userpermission)
          });
        }
      } else {
        userpermissions = userpermissions.map(item => {
          item.dataValues.roleName = item.Role.roleName;
          return item;
        });
      }
      res.send(userpermissions);
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
    } else {
      data = await models.Staff.findAll({ include: [models.StaffType] });
    }

    res.send(data);
  });
  router.post('/staffmember', async function (req, res) {
    let rawdata = req.body;
    rawdata.createdBy = req.session.passport.user.staffId;
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

  return router;
}