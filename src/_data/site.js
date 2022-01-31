// Some useful variables to expose to our site templsates
require('dotenv').config();

module.exports = {
  "utm": "?utm_source=github&utm_medium=tvoykofe-pnh&utm_campaign=devex",
  "host": new URL(process.env.URL || "https://localhost").host,
  "trello_board": process.env.TRELLO_BOARD_URL || 'https://trello.com/b/3TpDeiW0/doska'
};
