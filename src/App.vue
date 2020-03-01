<template>
  <div id="app">
    <h2>contagious map</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default{
data:()=>{
  return{
    positions:[],
    map:[]
}
},
created(){
axios.get('https://api.coronas.info/movements/')
    .then(response=>{
      this.map=response.data.map(val=>({
      title:val.patient,
      lat:val.lat,
      lng:val.lng
      }));
      for(let i=0;i<this.map.length;i++){
      let tmp = this.map[i];
      let position = {lat:tmp.lat,lng:tmp.lng};
      this.positions.push(position);
    }
      }
    )
},
mounted(){
 var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
          mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 14 // 지도의 확대 레벨
        };
      
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

        for (var i = 0; i < this.map.length; i ++) {
    
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: this.positions[i], // 마커를 표시할 위치
            title : this.map[i].patient, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
  }
}
}

</script>

