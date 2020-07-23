const axios = require('axios');

const getUserData = (callback) => {
  axios({
    method: "GET",
    url: 'http://quiet-brushlands-34026.herokuapp.com/get-user-data'
  })
  .then(({ data }) => {
    const userData = data.user;
    callback(userData);
  })
  .catch((e) => {
    callback([]);
  })
};

module.exports = { getUserData }
