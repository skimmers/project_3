const User = require('./User');
const Station = require('./Station');
const Comment = require('./Comment');
const Favorite = require('./Favorite');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Station.hasMany(Comment,{
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

// ***** Not sure if this is the best way to handle the associations between user/comment and search/comment??

module.exports = { User, Favorite, Comment, Location};
