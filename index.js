//examples below
console.log("LINKED");
//window.sessionStorage

// console.log("it's working");
// if (window.sessionStorage.accesspasstokenname)
//  //loaddefaulteventlistpage
//  else{
//      //load the login page
//  }
let iframe = document.getElementById("#theFrame");
console.log("the frams is" + iframe);
let goToSignUp = document.querySelector('#goToSignUp');
goToSignUp.addEventListener('click',function(){
	console.log("hello");
	console.log(iframe);
	iframe.setAttribute("src", "./views/signup.html");
});