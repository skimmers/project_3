const User = require('./User');


User.hasMany(Search, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Search.belongsTo(User, {
    foreignKey: 'user_id'
});

// ***** Not sure if this is the best way to handle the associations between user/comment and search/comment??

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Search.hasMany(Comment, {
    foreignKey: 'search_id',
});

Comment.belongsTo(Search, {
    foreignKey: 'search_id',
});



module.exports = { User, Search, Comment };
