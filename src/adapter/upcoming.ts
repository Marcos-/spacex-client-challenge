const axios = require('axios');
const BASE_URL = 'https://api.spacexdata.com/v3'

// Make a request for a user with a given ID
axios.get(BASE_URL + '/launches/upcoming')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
const getLaunches = async () => {
  try {
    const response = await axios.get(BASE_URL + '/launches/upcoming');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getLaunches;