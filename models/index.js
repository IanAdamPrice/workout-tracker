const Stats = require('./Stats');
const User = require('./User');

Stats.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Stats };