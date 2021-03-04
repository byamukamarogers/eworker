const config = require('../config');
const sequelize = config.sequelize;
const db = {};

db.AcountType = sequelize.import('./AccountType');
db.Job = sequelize.import('./Job');
db.JobType = sequelize.import('./JobType');

db.Staff = sequelize.import('./Staff');
db.StaffType = sequelize.import('./StaffType');
db.User = sequelize.import('./User');
db.Worker = sequelize.import('./Worker');
db.UserPermission = sequelize.import('./UserPermission');
db.UserRole = sequelize.import('./UserRole');
db.Complaint = sequelize.import('./Complaint');
db.Employer = sequelize.import('./Employer');
db.JobApplication = sequelize.import('./JobApplication');

//Staff Relations
db.Staff.belongsTo(db.StaffType, { foreignKey: 'staffTypeId', sourceKey: 'staffTypeId' });
db.Complaint.belongsTo(db.Worker, { foreignKey: 'workerId', sourceKey: 'workerId' });
db.UserPermission.belongsTo(db.UserRole, { foreignKey: 'roleid' });
db.UserRole.hasOne(db.UserPermission, { foreignKey: 'roleId', sourceKey: 'roleId' });
db.Job.belongsTo(db.Employer, { foreignKey: 'employerId', sourceKey: 'employerId' });
db.Job.belongsTo(db.JobType, { foreignKey: 'JobTypeId' });
db.Staff.hasOne(db.User, { foreignKey: 'email', sourceKey: 'email' });
db.Employer.hasOne(db.User, { foreignKey: 'email', sourceKey: 'email' });
db.Worker.hasOne(db.User, { foreignKey: 'email', sourceKey: 'email' });
db.JobApplication.belongsTo(db.Worker, { foreignKey: 'workerId', sourceKey: 'workerId' });
db.JobApplication.hasOne(db.Job, { foreignKey: 'jobId', sourceKey: 'jobId' });

/* sequelize.sync({ alter: true })
  .then(() => {
    console.log(`Table alter on`)
  }) */
module.exports = db;