const config = require('../config');
const sequelize = config.sequelize;
const db = {};

db.AcountType = sequelize.import('./AccountType');
db.Job = sequelize.import('./Job');
db.JobCategory = sequelize.import('./JobCategory');

db.Staff = sequelize.import('./Staff');
db.StaffType = sequelize.import('./StaffType');
db.User = sequelize.import('./User');
db.Worker = sequelize.import('./Worker');
db.UserPermission = sequelize.import('./UserPermission');
db.UserRole = sequelize.import('./UserRole');
db.Complaint = sequelize.import('./Complaint');
db.Employer = sequelize.import('./Employer');

//Staff Relations
db.Staff.belongsTo(db.StaffType, { foreignKey: 'staffTypeId', sourceKey: 'staffTypeId' });
db.Complaint.belongsTo(db.Worker, { foreignKey: 'workerId', sourceKey: 'workerId' });
db.UserPermission.belongsTo(db.UserRole, { foreignKey: 'roleid' });
db.Job.belongsTo(db.Employer,{ foreignKey: 'employerId', sourceKey: 'employerId'});
db.Job.belongsTo(db.JobCategory,{ foreignKey: 'jobCategoryId'});
db.Staff.hasOne(db.User, { foreignKey: 'email', sourceKey: 'email' });
db.Employer.hasOne(db.User, { foreignKey: 'email', sourceKey: 'email'});
db.Worker.hasOne(db.User, { foreignKey: 'email', sourceKey: 'email' });

/* sequelize.sync({ alter: true })
  .then(() => {
    console.log(`Table alter on`)
  }) */
module.exports = db;