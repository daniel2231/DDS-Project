/*
1. 매번 다른 값 반환(0~20)
2. 그 값으로 배열 또는 객체에서 이미지 경로, 가게 이름을 html에 표시

*/


var datt;

var bobImgArr2 = new Array(); //배열선언
bobImgArr2[0]='../public/img/술집/꺽정이네 장작구이.jpg'
bobImgArr2[1]='../public/img/술집/마돌.jpeg'
bobImgArr2[2]='../public/img/술집/서피동파.jpeg'
bobImgArr2[3]='../public/img/술집/fruits.jpeg'
bobImgArr2[4]='../public/img/술집/오디션포차.jpg'
bobImgArr2[5]='../public/img/술집/바코드.jpg'
bobImgArr2[6]='../public/img/술집/명륜포차.jpg'
bobImgArr2[7]='../public/img/술집/포차야.jpeg'
bobImgArr2[8]='../public/img/술집/싸코스.jpeg'
bobImgArr2[9]='../public/img/술집/주항아리.jpeg'
bobImgArr2[10]='http://blogfiles.naver.net/MjAyMDA2MjVfMjIg/MDAxNTkzMDY0NjQyODY2.uVTWPbQciAMM20cPjms9UPm6We4tR1_bh2uILNmWYE8g.dFUgialSCSnNc16nKyUQDp2YHNb8GMfKd6KZ493WUtMg.JPEG.njy1256/KakaoTalk_20200625_105635929_11.jpg'
bobImgArr2[11]='https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9996A33F5ACB71C82F'
bobImgArr2[12]='http://ldb.phinf.naver.net/20200702_186/1593700299252oqJIo_JPEG/gSNiQrZaXAZMaO6ixDGTyNRF.jpg'
bobImgArr2[13]='http://blogfiles.naver.net/MjAxODEyMDJfMTUw/MDAxNTQzNzQ2OTgxNDUz.5Ch8_B7ag8IRwlkIoobBQfD1vArgJTLr74rqiInmlbgg.YsJB1QvqiPF0L1-hHYFNl7QaMmJ6opGZguupYehlEgEg.JPEG.ksn5628/9.jpg'
bobImgArr2[14]='http://blogfiles.naver.net/MjAxOTExMDFfMjg0/MDAxNTcyNjA3OTgyNTY4.7OQ-ejWpqaJkjoCCLXk2lS1IHkDZ3YJbJ9TRdVpShbMg.kltsbTZGyoXK9TuTbLOVXqKIRAk-zRDYeiBxRIp6BV8g.JPEG.ssuyeonn2/IMG_7463.jpg'
bobImgArr2[15]='http://blogfiles.naver.net/MjAxOTExMDFfMjg0/MDAxNTcyNjA3OTgyNTY4.7OQ-ejWpqaJkjoCCLXk2lS1IHkDZ3YJbJ9TRdVpShbMg.kltsbTZGyoXK9TuTbLOVXqKIRAk-zRDYeiBxRIp6BV8g.JPEG.ssuyeonn2/IMG_7463.jpg'
bobImgArr2[16]='https://steemitimages.com/DQmSnPkiUzkxpTTK31iH7NNxcZMWre1wgvF3J3Yo61YCUXu/P20170927_214314026_EAAA1A03-A785-4CFA-BD96-9383597F096B.jpg'
bobImgArr2[17]='https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20190316174730_photo0_BC59JQglDifg.jpg'
bobImgArr2[18]='https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/584479_1491452589583361.jpg?fit=around%7C512:512&crop=512:512;*,*&output-format=jpg&output-quality=80'
bobImgArr2[19]='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-4_OD4DmRe9x9gHXXLqm2-9jH6tdy9Nr_Hw&usqp=CAU'

var bobArr2 = new Array(); //배열선언
bobArr2[0]='꺽정이네 돈장작구이'
bobArr2[1]='마돌'
bobArr2[2]='서피동파'
bobArr2[3]='Fruits'
bobArr2[4]='오디션포차'
bobArr2[5]='바코드'
bobArr2[6]='명륜포차'
bobArr2[7]='포차야'
bobArr2[8]='싸코스'
bobArr2[9]='주항아리'
bobArr2[10]='명쭈3'
bobArr2[11]='우리 한우 곱창'
bobArr2[12]='도리안그레이'
bobArr2[13]='남자주방'
bobArr2[14]='잼잼파스탕'
bobArr2[15]='장고상회'
bobArr2[16]='코다차야'
bobArr2[17]='혜화동 사람들'
bobArr2[18]='한신포차'
bobArr2[19]='술부심'


var bobTelArr2 = new Array(); //배열선언
bobTelArr2[0]='tel:02-744-7004'
bobTelArr2[1]='tel:02-742-7292'
bobTelArr2[2]='tel:02-766-3077'
bobTelArr2[3]='tel:02-763-7663'
bobTelArr2[4]='tel:0507-1401-7685'
bobTelArr2[5]='tel:02-741-2346'
bobTelArr2[6]='tel:02-745-8202'
bobTelArr2[7]='tel:02-766-4369'
bobTelArr2[8]='tel:02-741-3860'
bobTelArr2[9]='tel:02-743-6944'
bobTelArr2[10]='tel:0507-1418-2565'
bobTelArr2[11]='tel:02-747-8566'
bobTelArr2[12]='tel:0507-1309-2378'
bobTelArr2[13]='tel:0507-1309-9934'
bobTelArr2[14]='tel:0507-1307-9159'
bobTelArr2[15]='tel:0507-1318-3685'
bobTelArr2[16]='tel:02-766-7700'
bobTelArr2[17]='tel:070-8114-3892'
bobTelArr2[18]='tel:02-744-7710'
bobTelArr2[19]='tel:02-743-8975'


var bobStarArr2 = new Array(); //배열선언
bobStarArr2[0]='5.00'
bobStarArr2[1]='4.60'
bobStarArr2[2]='4.50'
bobStarArr2[3]='4.40'
bobStarArr2[4]='3.40'
bobStarArr2[5]='3.80'
bobStarArr2[6]='4.40'
bobStarArr2[7]='4.00'
bobStarArr2[8]='4.50'
bobStarArr2[9]='4.20'
bobStarArr2[10]='4.40'
bobStarArr2[11]='4.00'
bobStarArr2[12]='4.90'
bobStarArr2[13]='4.50'
bobStarArr2[14]='4.00'
bobStarArr2[15]='4.20'
bobStarArr2[16]='4.50'
bobStarArr2[17]='4.00'
bobStarArr2[18]='4.40'
bobStarArr2[19]='3.80'


function barToggleImg(min,max) {
    datt=Math.floor(Math.random()*(max-min+1));
    document.getElementById("imgimg").src = bobImgArr2[datt];
    document.getElementById("name").innerHTML=bobArr2[datt];
    document.getElementById("phone").href=bobTelArr2[datt];
    document.getElementById("star").innerHTML=bobStarArr2[datt];
  }
