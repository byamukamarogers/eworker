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

//BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */

module.exports = function (passport) {
  //---------AUTHENTICATION ROUTES---------------------
  router.get('/', auth.authenticate, function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });
  router.get('/home', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
  });
  router.get('/registerWorker', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'views', 'registerWorker.html'));
  });
  router.get('/registerEmployer', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'views', 'registerEmployer.html'));
  });


  router.get('/login', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), 'views', 'login-main.html'));
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
    res.sendFile(path.join(process.cwd(), 'views', 'login-main.html'));
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
    rawdata.createdBy = req.session.passport.user.user_id;
    let data = {};
    try {
      let result;
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      data.password = await bcrypt.hash(rawdata.password, await bcrypt.genSalt(saltRounds));
      if (data.password) {
        result = await models.User.create(data);
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
      console.log(err);
    }
  });
  router.get('/worker', auth.authenticate, async function (req, res, next) {
    let result = await models.Worker.findAll();
    res.send(result);
  });
  router.post('/worker', async function (req, res, next) {
    let rawdata = req.body;
    if (req.session.passport === undefined) {
      rawdata.createdBy = null
    } else {
      rawdata.createdBy = req.session.passport.user.user_id
    };
    let data = {};
    try {
      let result;
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      if (rawdata.workerId) {
        result = await models.Worker.update(data, { where: { workerId: data.workerId } });

      } else {
        result = await models.Worker.create(data);
        data.password = await bcrypt.hash(rawdata.password, await bcrypt.genSalt(saltRounds));
        if (data.password) {
          data.userId = data.email
          result = await models.User.create(data);
        }
      }
      if (rawdata.createdBy === null) {
        //redirectToLogin
        res.sendFile(path.join(process.cwd(), 'views', 'login-main.html'));
      } else {
        res.send({ status: 'OK', data: result });
      }
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
    rawdata.createdBy = req.session.passport.user.user_id;
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
        data = await models.User.findAll({ where: { [Op.or]: [{ firstname: { [Op.like]: `%${val}%` } }, { lastname: { [Op.like]: `%${val}%` } }] } });
        break;

      case 'phoneno':
        data = await models.User.findAll({ where: { [Op.or]: [{ phone1: { [Op.like]: `%${val}%` } }, { phone2: { [Op.like]: `%${val}%` } }] } });
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
    let result;
    let userid = req.query.userId;
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
    if (userid) {
      result = await models.UserRole.findAll({
        include: [{
          model: models.UserPermission, where: { userId: userid }, required: true, left: true
        }]
      });
      res.send(result);
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
    rawdata.createdBy = req.session.passport.user.user_id;
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
        if (result) {
          //default
          let password = '123';
          data.password = await bcrypt.hash(password, await bcrypt.genSalt(saltRounds));
          if (data.password) {
            data.userId = data.email;
            data.accountTypeId = 1;
            result = await models.User.create(data);
          }

        }
      }
      if (result) {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.post('/complaint', async function (req, res) {
    let rawdata = req.body;
    rawdata.addedBy = req.session.passport.user.user_id;
    let data = {};
    try {
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      let result;
      if (data.complaintId) {
        result = await models.Complaint.update(data, { where: { complaintId: data.complaintId } });
      } else {
        data.workerId = req.session.passport.user.user_id;
        result = await models.Complaint.create(data);
      }
      if (result) {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.post('/stafftype', async function (req, res) {
    let rawdata = req.body;
    let data = {};
    try {
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      let result;
      if (data.staffTypeId) {
        result = await models.StaffType.update(data, { where: { staffTypeId: data.staffTypeId } });
      } else {
        result = await models.StaffType.create(data);
      }
      if (result) {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.get('/complaint', async function (req, res) {
    let result = await models.Complaint.findAll({
      include: [models.Worker]
    });
    res.send(result);
  });

  router.post('/job', async function (req, res) {
    let rawdata = req.body;
    rawdata.addedBy = req.session.passport.user.user_id;
    let data = {};
    try {
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      let result;
      if (data.jobId) {
        result = await models.Job.update(data, { where: { jobId: data.jobId } });
      } else {
        data.employerId = req.session.passport.user.user_id;
        //data.expiryDate = rawdata.expiryDate;
        result = await models.Job.create(data);
      }
      if (result) {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.get('/job', async function (req, res) {
    let employerId = req.query.employerId;
    let result;
    if (!isNaN(employerId)) {
      result = await models.Job.findAll({
        where: { employerId: employerId },
        include: [models.Employer, models.JobType]
      });
    } else {
      result = await models.Job.findAll({
        include: [models.Employer, models.JobType]
      });
    }
    res.send(result);
  });

  router.post('/jobApplication', async function (req, res) {
    let rawdata = req.body;
    rawdata.addedBy = req.session.passport.user.user_id;
    let data = {};
    try {
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      let result;
      if (data.jobApplicationId) {
        result = await models.JobApplication.update(data, { where: { jobApplicationId: data.jobApplicationId } });
      } else {
        data.dateApplied = new Date();
        data.workerId = req.session.passport.user.user_id;
        result = await models.JobApplication.create(data);
      }
      if (result) {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.get('/jobApplication', async function (req, res) {
    let workerId = req.query.workerId;
    let jobId = req.query.jobId;
    let result;
    if (!isNaN(workerId)) {
      result = await models.JobApplication.findAll({
        where: { workerId: workerId },
        include: { model: models.Job, include: [models.Employer] }
      });
    } else if (!isNaN(jobId)) {
      result = await models.JobApplication.findAll({
        where: { jobId: jobId },
        include: [models.Worker, models.Job]
      });
    } else {
      result = await models.JobApplication.findAll({
        include: [models.Worker, models.Job]
      });
    }
    res.send(result);
  });

  router.post('/JobType', async function (req, res) {
    let rawdata = req.body;
    rawdata.addedBy = req.session.passport.user.user_id;
    let data = {};
    try {
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      let result;
      if (data.JobTypeId) {
        result = await models.JobType.update(data, { where: { JobTypeId: data.JobTypeId } });
      } else {
        result = await models.JobType.create(data);
      }
      if (result) {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.get('/JobType', async function (req, res) {
    let result = await models.JobType.findAll();
    res.send(result);
  });

  router.post('/employer', async function (req, res) {
    let rawdata = req.body;
    if (req.session.passport === undefined){
      rawdata.createdBy = null
    } else {
      rawdata.createdBy = req.session.passport.user.user_id
    };
    let data = {};
    try {
      for (key in rawdata) {
        if (rawdata[key] !== '') {
          data[key] = rawdata[key];
        }
      }
      let result;
      if (data.employerId) {
        result = await models.Employer.update(data, { where: { employerId: data.employerId } });
      } else {
        result = await models.Employer.create(data);
        data.password = await bcrypt.hash(rawdata.password, await bcrypt.genSalt(saltRounds));
        if (data.password) {
          data.userId = data.email;
          data.accountTypeId = 2;
          result = await models.User.create(data);
        }
      }      
      if (rawdata.createdBy === null) {
        //redirectToLogin
        res.sendFile(path.join(process.cwd(), 'views', 'login-main.html'));
      } else {
        res.send({ status: 'OK', data: result });
      }
    } catch (err) {
      res.status(400).send("Sorry. Something happened on the server. Contact System Admin");
      console.log(err);
    }
  });

  router.get('/employer', async function (req, res) {
    let result = await models.Employer.findAll();
    res.send(result);
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