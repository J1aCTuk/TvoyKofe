// Get any environment variables we need
require('dotenv').config();
const {
  TRELLO_LIST_ID='61f27ad4f8622f6e41656b05',
  TRELLO_TOKEN='66c4ca38c1dc7c18c3ee626005a853a81f510577a45dea946cdcb8e95a1e37bf',
  TRELLO_KEY='cfb4699eb3b9a314f6025d00892cfad1',
  npm_config_url } = process.env;

const fetch = require('node-fetch');

const body = {
  description: "Netlify build hook",
  callbackURL: npm_config_url,
  idModel: TRELLO_LIST_ID
}

fetch(`https://api.trello.com/1/tokens/${TRELLO_TOKEN}/webhooks/?key=${TRELLO_KEY}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(json => console.log(json));
