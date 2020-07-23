const axios = require('axios');

const search = (topic, callback) => {
  axios({
    method: "POST",
    url: 'http://quiet-brushlands-34026.herokuapp.com/search',
    data: {
      topic
    }
  })
  .then(({ data }) => {
    const searchResults = data.search;
    callback(searchResults);
  })
  .catch((e) => {
    callback([]);
  })
};

module.exports = { search }
