/*
1. 매번 다른 값 반환(0~20)
2. 그 값으로 배열 또는 객체에서 이미지 경로, 가게 이름을 html에 표시

*/


var dat;


var bobImgArr = new Array(); //배열선언
bobImgArr[0]='../public/img/밥집/메밀향그집.jpg'
bobImgArr[1]='../public/img/밥집/청춘직화.jpeg'
bobImgArr[2]='../public/img/밥집/바오밥.jpeg'
bobImgArr[3]='../public/img/밥집/깔리.jpeg'
bobImgArr[4]='../public/img/밥집/명륜건강원.jpg'
bobImgArr[5]='../public/img/밥집/버거파크.jpeg'
bobImgArr[6]='../public/img/밥집/산쪼메.jpg'
bobImgArr[7]='../public/img/밥집/소친친.jpg'
bobImgArr[8]='../public/img/밥집/정돈.jpg'
bobImgArr[9]='../public/img/밥집/쪼리닭.jpg'
bobImgArr[10]='../public/img/밥집/파스타마켓.jpeg'
bobImgArr[11]='../public/img/밥집/혜화칼국수.jpg'
bobImgArr[12]='../public/img/밥집/호호식당.jpg'

var bobArr = new Array(); //배열선언
bobArr[0]='메밀향그집'
bobArr[1]='청춘직화'
bobArr[2]='바오밥'
bobArr[3]='깔리'
bobArr[4]='명륜건강원'
bobArr[5]='버거파크'
bobArr[6]='산쪼메'
bobArr[7]='소친친'
bobArr[8]='정돈'
bobArr[9]='쪼리닭'
bobArr[10]='파스타마켓'
bobArr[11]='혜화칼국수'
bobArr[12]='호호식당'

function toggleImg() {
    dat=Math.floor(Math.random()*10);
    document.getElementById("num").innerHTML=dat;
    document.getElementById("img").src = bobImgArr[dat];
    document.getElementById("name").innerHTML=bobArr[dat];
  }
  document.innerHTML(dat);
