const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find()
         
    }, 
