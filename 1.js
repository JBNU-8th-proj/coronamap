const axios = require("axios");
const fs = require("fs");
// ID로 사용자 요청
axios
  .get("https://api.coronas.info/movements/")
  // 응답(성공)
  .then(function getMovements(response) {
    // const data = response.data.map(val => ({ lat: val.lat, lng: val.lng }));
    let test = response.data;
    let new_test = [];
    for(let i=0;i<test.length;i++){
      let val = test[i];
      let tmp = {lat:val.lat, lng:val.lng};
      new_test.push(tmp);
    }
    new_test: {lat,lng};
    asdf
    const writedData = JSON.stringify({data:data});
    fs.writeFile("./coordinate.json", writedData, err => {
      if (err) throw err;
      console.log(err);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

// const axios = require('axios');

// var apiUrl = "https://api.coronas.info/patients/";

// function axiosTest() {
//   return axios.get(apiUrl).then(response => {
//     // returning the data here allows the caller to get it through another .then(...)
//     return response.data
//   })
// }

// axiosTest().then(data => {
//   response.json({ message: 'Request received!', data })
// })
