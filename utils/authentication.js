const dao = require('./dao');
const bcrypt = require('bcrypt');
const path = require('path');
const models = require('../models');
const LocalStrategy = require('passport-local').Strategy;
module.exports = init;
module.exports.authenticate = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/home');
        //next();
    }
}
function init(passport) {
    passport.use('local', new LocalStrategy({
        passReqToCallback: true
    }, async function (req, userid, password, done) {
        try {
            let user = await models.User.findOne({ where: { userId: userid } });
            if (user) {
                let isValid = bcrypt.compareSync(password, user.password);
                if (isValid) {
                    user.password = undefined;
                    let userInfo;
                    if (user.accountTypeId === 1) {
                        //Staff
                        userInfo = await models.Staff.findOne({ where: { email: user.userId } });
                        if (userInfo) {
                            user.fullName = [userInfo.firstName, userInfo.lastName].join(' ');
                            user.user_id = userInfo.staffId
                        }
                    } else if (user.accountTypeId === 2) {
                        //Employer
                        userInfo = await models.Employer.findOne({ where: { email: user.userId } });
                        if (userInfo) {
                            user.fullName = [userInfo.firstName, userInfo.lastName].join(' ');                            
                            user.user_id = userInfo.employerId
                        }
                    } else {
                        //Worker
                        userInfo = await models.Worker.findOne({ where: { email: user.userId } });
                        if (userInfo) {
                            user.fullName = [userInfo.firstName, userInfo.lastName].join(' ');                            
                            user.user_id = userInfo.workerId
                        }
                    }
                    done(null, user.get({ flat: true }));
                } else {
                    done(null, false);
                }
            } else {
                return done(null, false);
            }
        } catch (err) {
            console.log(err);
        }
    }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(async function (user, done) {
        //let user = await models.User.findOne({ where: { userId: user.userid } });
        if (user) {
            user.password = null;
            //let roles = await models.Roles.findAll({ where: { userId: userid } });
            //user.roles = roles;
            let userInfo;
            if (user.accountTypeId === 1) {
                //Staff
                userInfo = await models.Staff.findOne({ where: { email: user.userId } });
                if (userInfo) {
                    user.fullName = [userInfo.firstName, userInfo.lastName].join(' ');
                    user.user_id = userInfo.staffId
                }
            } else if (user.accountTypeId === 2) {
                //Employer
                userInfo = await models.Employer.findOne({ where: { email: user.userId } });
                if (userInfo) {
                    user.fullName = [userInfo.firstName, userInfo.lastName].join(' ');                            
                    user.user_id = userInfo.employerId
                }
            } else {
                //Worker
                userInfo = await models.Worker.findOne({ where: { email: user.userId } });
                if (userInfo) {
                    user.fullName = [userInfo.firstName, userInfo.lastName].join(' ');                            
                    user.user_id = userInfo.workerId
                }
            }
            return done(null, user);
        }
        return done('Failed to deserialize User stuff', false);
    });
}
