const config = require('../config');
const sequelize = config.sequelize;
const db = {};

db.User = sequelize.import('./User');
db.AcountType = sequelize.import('./AccountType');
db.Job = sequelize.import('./Job');

db.Staff = sequelize.import('./Staff');
db.StaffType = sequelize.import('./StaffType');

//Staff Relations
db.Staff.hasOne(db.StaffType,{foreignKey: 'staffTypeId', sourceKey: 'staffTypeId'});

sequelize.sync({ alter: true })
  .then(() => {
    console.log(`Table alter on`)
  })
module.exports = db;