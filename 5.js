const axios=require('axios');
var fs = require('fs');


axios.get('https://api.coronas.info/movements/',{
    transformResponse: (res) => {
        // Do your own parsing here if needed ie JSON.parse(res);
        return res;
    },
}).then(response => {(
    console.log(response.data.dat.lat)
    // for(){
    //     data.push({
    //         lat:response.data[0].lat;
    //         log:response.data[0].log;
    //     })
        

    // }
    
)}

// 자료 형태에 대한 이해가 필수