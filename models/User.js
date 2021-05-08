const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');

// checkPassword method to compare hashed password in DB with user input

class User extends Model {
    async checkPassword(loginPass) {
      // use async bcrypt compare method
      const correctPass = await bcrypt.compare(loginPass, this.password);
      return correctPass;
    }
}

// User model has these fields: id, username, email, password
// also has hooks for hashing passwords

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { 
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        }
    },
    {
        hooks: {
          beforeCreate: async (newUser) => {
            newUser.password = await bcrypt.hash(newUser.password, 10);
            return newUser;
          },
          beforeUpdate: async (updatedUser) => {
            updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
            return updatedUser;
          },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;