// document.addEventListener("DOMContentLoaded",start)
// function start(){
//     fetchShirts();
// }
// fetch("http://localhost:3000/shirts")
// .then(response=>response.json())
// .then(data=>data.forEach(element =>{
//     // render data to the dom 
//     loadShirts(element)
// }))

// function start() {
//     fetchingFromSever();
//     console.log("buy shirt");
    
//   }
//   // fetch 
//   function fetchingFromSever() {
//     fetch("http://localhost:3000/shirts")
//       .then((response) => response.json())
//       .then((data) => data.forEach((shirt) => buyOneShirt(shirt)))
//       .then((data) =>data.forEach(element=>renderOneShirt(element)))
//   }
//   function renderOneShirt(shirt){
//     let myMain =document.querySelector("main")
//     let myNav =document.createElement("nav");
//     myMain.appendChild(myNav);
//      myNav.innerText=`${shirt.name}`}






var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var list=document.getElementById("list");



button.addEventListener("click",function(){

	var ak=input.value;
	if(ak.length>0)
	{
	
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(ak));
	list.appendChild(li);
	input.value="";
	}
	});


// button.addEventListener("mouseenter",function(){

// 	var ak=input.value;
// 	if(ak.length>0)
// 	{
	
// 	var li=document.createElement("li");
// 	li.appendChild(document.createTextNode(ak));
// 	list.appendChild(li);
// 	input.value="";
// 	}
// 	});
 input.addEventListener("keypress",function(m){

	var ak=input.value;
	if(ak.length>0 && m.keyCode==13)
	{
	
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(ak));
	list.appendChild(li);
	input.value="";
	}
	});





