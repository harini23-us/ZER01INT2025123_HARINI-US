import User from './User.js';
import Blog from './Blog.js';
import Message from './Message.js';
import Like from './Like.js';
import Follow from './Follow.js';

// User-Blog associations
User.hasMany(Blog, { foreignKey: 'userId' });
Blog.belongsTo(User, { foreignKey: 'userId' });

// Message associations
User.hasMany(Message, { as: 'SentMessages', foreignKey: 'senderId' });
User.hasMany(Message, { as: 'ReceivedMessages', foreignKey: 'receiverId' });
Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId' });

// Like associations
User.hasMany(Like, { foreignKey: 'userId' });
Blog.hasMany(Like, { foreignKey: 'blogId' });
Like.belongsTo(User, { foreignKey: 'userId' });
Like.belongsTo(Blog, { foreignKey: 'blogId' });

// Follow associations
User.hasMany(Follow, { as: 'Followers', foreignKey: 'followingId' });
User.hasMany(Follow, { as: 'Following', foreignKey: 'followerId' });
Follow.belongsTo(User, { as: 'follower', foreignKey: 'followerId' });
Follow.belongsTo(User, { as: 'following', foreignKey: 'followingId' });

export { User, Blog, Message, Like, Follow };