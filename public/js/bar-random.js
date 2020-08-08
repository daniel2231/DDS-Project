/*
1. 매번 다른 값 반환(0~20)
2. 그 값으로 배열 또는 객체에서 이미지 경로, 가게 이름을 html에 표시

*/


var datt;

var bobImgArr2 = new Array(); //배열선언
bobImgArr2[0]='http://blogfiles.naver.net/MjAxOTA5MjRfMjYy/MDAxNTY5MzM1MjAxMTM3.lr0UWf_nPfkIuw9yHiznFAWU6mfRemiJ_GfEqoYu_SIg.wk8VurG52mpDRVvG326woYPYFrY7442A505vmANkXs8g.JPEG.ekwjd373/IMG_2159.jpg'
bobImgArr2[1]='https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190828_79%2F15670031782749LKXS_JPEG%2FoETd0NDJlH77ikzmPwjnG1Gr.jpg'
bobImgArr2[2]='http://blogfiles.naver.net/MjAyMDA3MjJfMjkz/MDAxNTk1MzQ3MzM0NTQy.5HBtW6DHnEjdbZ9b1Fxo6X1Cbh1nA1o6pDQY4r6_eMAg.ftf6rN8h_a_5SYxAiTFB8_v27t1u-ofUITAhPtD0CDsg.JPEG.2yolo2/IMG_3828.JPG'
bobImgArr2[3]='http://blogfiles.naver.net/MjAxODAzMjlfMjY2/MDAxNTIyMzMzMTE0MDE0.oDqbb8HksYYGyWGR-NzTVdhVqX-I92fPZSTWmiBugecg.28SYbNFPGQSiiBtp1p87NUte_rhxQufn83piPC7_30gg.JPEG.deangul7/IMG_3186.JPG'
bobImgArr2[4]='http://blogfiles.naver.net/MjAxOTA5MDFfMjI0/MDAxNTY3MzQ0NzEyOTEx.Khvu5Y4aMoN9EIvyKgIfraol3bk6egHS3fnYYFNAT6Mg.HJO_fmSs2-wgXEhzw2uIEDcbtyt1biGTWCbXx0txwjog.JPEG.3771_panda/P20190829_200737162_88C85A6C-0444-49B3-8402-9643847345BA.jpg'
bobImgArr2[5]='https://blogfiles.pstatic.net/MjAxOTA1MDVfMTY4/MDAxNTU3MDU0MTY2OTM4.VybUZp6jDJFys8uqVmU2V2yJN8ACF2yws9LrHAhs61wg.v7IwnPooLD8ozCmKMdweeOjGNjwM2vTYzH0j0PAbtqYg.JPEG.aamcw/20190505_1958122.jpg?type=w2'
bobImgArr2[6]='http://blogfiles.naver.net/MjAyMDAxMzBfMTUx/MDAxNTgwMzc0Nzg5Mzc4.Q2RZDNw3BaN5mUFgPdogBj2M6Wy4AuPWtkhyzhavIv8g.ZNt7wE0ibKmI4GnsFkpe1LvxRX7QLShKpA7To3UEV8cg.JPEG.euna2694/1580374788423.jpg'
bobImgArr2[7]='https://img.siksinhot.com/place/1380107353673561.jpg?w=540&h=436&c=Y'
bobImgArr2[8]='https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EC%8B%B8%EC%BD%94%EC%8A%A4#'
bobImgArr2[9]='http://blogfiles.naver.net/MjAyMDA3MjRfMTUw/MDAxNTk1NTM1MTcwOTI3.YvrvqZekd5MTwOgp-R5dcjMH1tDu5NFu09Fk-oFl2wog.Iw2HyhY9oA6KilsYdggUiPzFjyhS1xCXjjEmhmW4p6Ug.JPEG.eeeer4e/1595535167574.jpg'
bobImgArr2[10]='http://blogfiles.naver.net/MjAyMDA2MjVfMjIg/MDAxNTkzMDY0NjQyODY2.uVTWPbQciAMM20cPjms9UPm6We4tR1_bh2uILNmWYE8g.dFUgialSCSnNc16nKyUQDp2YHNb8GMfKd6KZ493WUtMg.JPEG.njy1256/KakaoTalk_20200625_105635929_11.jpg'
bobImgArr2[11]='http://blogfiles.naver.net/20131226_253/yunwha37_1388014587665qaLO9_JPEG/1388014585605_CAM00584.jpg'
bobImgArr2[12]='http://ldb.phinf.naver.net/20200702_186/1593700299252oqJIo_JPEG/gSNiQrZaXAZMaO6ixDGTyNRF.jpg'
bobImgArr2[13]='http://blogfiles.naver.net/MjAxODEyMDJfMTUw/MDAxNTQzNzQ2OTgxNDUz.5Ch8_B7ag8IRwlkIoobBQfD1vArgJTLr74rqiInmlbgg.YsJB1QvqiPF0L1-hHYFNl7QaMmJ6opGZguupYehlEgEg.JPEG.ksn5628/9.jpg'
bobImgArr2[14]='http://blogfiles.naver.net/MjAxOTExMDFfMjg0/MDAxNTcyNjA3OTgyNTY4.7OQ-ejWpqaJkjoCCLXk2lS1IHkDZ3YJbJ9TRdVpShbMg.kltsbTZGyoXK9TuTbLOVXqKIRAk-zRDYeiBxRIp6BV8g.JPEG.ssuyeonn2/IMG_7463.jpg'
bobImgArr2[15]='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mangoplate.com%2Frestaurants%2F6wvemogWAVFm&psig=AOvVaw3Mj-errkpNYuycnaf54mqg&ust=1595738143867000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiSsf3J5-oCFQAAAAAdAAAAABAD'
bobImgArr2[16]='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteemit.com%2Fkr%2F%40heejae%2F3fsrha&psig=AOvVaw3aC4D8DJJvgOWkPcCeP7Pg&ust=1595738181067000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDYqZHK5-oCFQAAAAAdAAAAABAK'
bobImgArr2[17]='http://blogfiles.naver.net/20140331_163/nayo3111_1396244297031RhFBC_JPEG/CIMG4484.JPG'
bobImgArr2[18]='https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/584479_1491452589583361.jpg?fit=around%7C512:512&crop=512:512;*,*&output-format=jpg&output-quality=80'
bobImgArr2[19]='http://blogfiles.naver.net/MjAxODA1MTlfMTM3/MDAxNTI2NzQwODY1OTcx.kUsUvkdCh0e2facMj2-vXH1OcCbJEuXqP43KYiEaFOUg.skx7lV0vwMyaqRreVdfLtQspiYAFKRW77RqE5X3BRyMg.JPEG.princessllia/P20180519_184615800_893AC25F-6718-4491-938D-A5A8DD4C9D5F.JPG'

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
