
var test=document.querySelector('.nav-item #location-tab');
console.log(test.attributes[6].value);

if(test.attributes[6].value==='true'){
  window.dispatchEvent(new Event('resize'));
  console.log("yesss");
}