const Stats = require('./Stats');
const User = require('./User');
const Workouts = require('./Workouts');

Stats.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Stats, {
    foreignKey: 'user_id'
});

Workouts.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Workouts, {
    foreignKey: 'user_id'
});

module.exports = { User, Stats, Workouts };
