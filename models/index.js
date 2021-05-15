const User = require('./server/models/User');
const Station = require('./server/models/Station');
const Comment = require('./server/models/Comment');
const Favorite = require('./server/models/Favorite');
const Location = require('./server/models/Location');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreignKey: '',
});

Station.hasMany(Comment, {
    foreignKey: 'station_id',
});

Location.hasMany(Station, {
    foreignKey: 'location_id',
});

Favorite.belongsTo(Station, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',

});

module.exports = { User, Favorite, Comment, Location };