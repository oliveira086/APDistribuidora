require('dotenv').config();

// module.exports = {
//   username: 'root',
//   password: 'kGGnN95q99Sh',
//   database: 'ap',
//   host: '127.0.0.1',
//   dialect:"mysql"
// };

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect:"mysql"
};


