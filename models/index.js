const User = require('./User');
const Station = require('./Station');
const Comment = require('./Comment');
const Favorite = require('./Favorite');
//const Location = require('./Location');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreignKey: 'favorite_id',
});

Station.hasMany(Comment, {
    foreignKey: 'station_id',
});

//Location.hasMany(Station, {
    //foreignKey: 'location_id',
//});

Favorite.belongsTo(Station, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',

});

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

module.exports = { User, Favorite, Comment, Station };