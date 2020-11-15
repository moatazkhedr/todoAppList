// Select Landing Page Element 
let landingPage = document.querySelector('.landing-page');

//Get Array Of Imgs
let imgsArray=["photo5.jpg","photo4.jpg","photo3.jpg","photo2.jpg","photo1.jpg"];
//console.log(imgsArray);

// Change Background Image Url 

//Get Random Number 
//let randomNumber =Math.floor(Math.random()*imgsArray.length);
//console.log(randomNumber)
setInterval(() =>{
let randomNumber =Math.floor(Math.random()*imgsArray.length);

 // console.log(randomNumber)
 landingPage.style.backgroundImage='url("photo/'+imgsArray[randomNumber] +'")';


},10000);

