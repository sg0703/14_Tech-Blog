const sequelize = require('../config/config');
const { Post, User, Comment } = require('../models');

const postData = require('./postData.json');
const userData = require('./userData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
