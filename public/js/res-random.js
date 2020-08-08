/*
1. 매번 다른 값 반환(0~20)
2. 그 값으로 배열 또는 객체에서 이미지 경로, 가게 이름을 html에 표시

*/


var dat;

var bobImgArr = new Array(); //배열선언
bobImgArr[0]='/img/밥집/메밀향그집.jpg'
bobImgArr[1]='/img/밥집/청춘직화.jpeg'
bobImgArr[2]='/img/밥집/바오밥.jpeg'
bobImgArr[3]='/img/밥집/깔리.jpeg'
bobImgArr[4]='/img/밥집/명륜건강원.jpg'
bobImgArr[5]='/img/밥집/버거파크.jpeg'
bobImgArr[6]='/img/밥집/산쪼메.jpg'
bobImgArr[7]='/img/밥집/소친친.jpg'
bobImgArr[8]='/img/밥집/정돈.jpg'
bobImgArr[9]='/img/밥집/쪼리닭.jpg'
bobImgArr[10]='/img/밥집/파스타마켓.jpeg'
bobImgArr[11]='/img/밥집/혜화칼국수.jpg'
bobImgArr[12]='/img/밥집/호호식당.jpg'
bobImgArr[13]='/img/밥집/부부식당.jpeg'

var bobArr = new Array(); //배열선언
bobArr[0]='메밀향그집'
bobArr[1]='청춘직화'
bobArr[2]='바오밥'
bobArr[3]='깔리'
bobArr[4]='명륜건강원'
bobArr[5]='버거파크'
bobArr[6]='산쪼메'
bobArr[7]='소친친'
bobArr[8]='정돈 대학로 본점'
bobArr[9]='쪼리닭'
bobArr[10]='파스타마켓'
bobArr[11]='혜화칼국수'
bobArr[12]='호호식당'
bobArr[13]='부부식당'

var bobTelArr = new Array(); //배열선언
bobTelArr[0]='tel:02-745-3681'
bobTelArr[1]='tel:02-765-1170'
bobTelArr[2]='tel:02-764-7778'
bobTelArr[3]='tel:02-747-5050'
bobTelArr[4]='tel:02-741-2344'
bobTelArr[5]='tel:02-747-3005'
bobTelArr[6]='tel:02-3672-6470'
bobTelArr[7]='tel:02-742-8594'
bobTelArr[8]='tel:02-987-0924'
bobTelArr[9]='tel:02-747-9932'
bobTelArr[10]='tel:070-4195-7700'
bobTelArr[11]='tel:02-743-8212'
bobTelArr[12]='tel:02-741-2384'
bobTelArr[13]='tel:02-765-6056'


var bobStarArr = new Array(); //배열선언
bobStarArr[0]='4.00'
bobStarArr[1]='4.40'
bobStarArr[2]='3.70'
bobStarArr[3]='4.40'
bobStarArr[4]='4.20'
bobStarArr[5]='4.30'
bobStarArr[6]='3.80'
bobStarArr[7]='4.40'
bobStarArr[8]='4.40'
bobStarArr[9]='3.90'
bobStarArr[10]='4.40'
bobStarArr[11]='3.90'
bobStarArr[12]='4.00'
bobStarArr[13]='3.80'


function toggleImg(min,max) {
    dat=Math.floor(Math.random()*(max-min+1));
    document.getElementById("img").src = bobImgArr[dat];
    document.getElementById("name").innerHTML=bobArr[dat];
    document.getElementById("phone").href=bobTelArr[dat];
    document.getElementById("star").innerHTML=bobStarArr[dat];
  }
