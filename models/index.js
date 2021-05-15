const User = require('./models/User');
const Station = require('./models/Station');
const Comment = require('./models/Comment');
const Favorite = require('./models/Favorite');
const Location = require('./models/Location');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreignKey: 'fovorite_id',
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

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

module.exports = { User, Favorite, Comment, Location, Station };