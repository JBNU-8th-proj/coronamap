<template>
  <div id="app">
    <h2>contagious map</h2>
    <div class="place">
    <li v-for="position of positions" :key=position.id>
          {{position.lat}}
    </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
data:()=>{
  return{
  positions:[]
}
},
created(){
axios.get('https://api.coronas.info/movements/')
    .then(response=>{
    const core=response.data.map(val=>({lat:val.lat,lng:val.lng,patient:val.patient}));
    for(let i=0;i<core.length;i++){
      let placelist= core[i];
      positions.push(placelist);
    }
    })
    .catch(e=>{
      console.log('error:',e)
    })
},
}
</script>