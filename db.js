const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/?authSource=admin'
)
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

module.exports = mongoose;
