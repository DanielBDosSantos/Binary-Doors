//global variables
let doorImg1 = document.getElementById("door1");
let doorImg2 = document.getElementById("door2");
let doorImg3 = document.getElementById("door3");


let startButton = document.getElementById('start')
let closedDoor = "closedDoor.png";
let doorOne = "doorOne.png";
let doorZero = "doorZero.png";

let numClosedDoors = 3;
let openDoor = [];

 //playDoor Functions
 let foundOne = false;

 const playDoor = () => {
   numClosedDoors--;   
   if (numClosedDoors === 1 && foundOne === false) {
     gameOver('lost');
   }else if((numClosedDoors === 1 || numClosedDoors === 2) && foundOne === true){
   gameOver('win')
   };
 }
//random generator and click functions
function randomOpenGenerator(){
	let randDoor = Math.floor(Math.random()*numClosedDoors);
	if(randDoor===0){
		openDoor[1] = "doorOne.png";
		openDoor[2] = "doorZero.png";
		openDoor[3] = "doorZero.png";
		
		doorImg1.onclick = () => {
			doorImg1.src = openDoor[1];
			foundOne = true;
			playDoor();
 		};
 		
 		doorImg2.onclick = () => {
			doorImg2.src = openDoor[2];
			foundOne = false;
			playDoor();
 		};
 		
 		doorImg3.onclick = () => {
			doorImg3.src = openDoor[3];
			foundOne = false;
			playDoor();
 		};
	} else if(randDoor===1){
		openDoor[1] = "doorZero.png";
		openDoor[2] = "doorOne.png";
		openDoor[3] = "doorZero.png";
		
		doorImg1.onclick = () => {
			doorImg1.src = openDoor[1];
			foundOne = false;
			playDoor();
 		};
 		
 		doorImg2.onclick = () => {
			doorImg2.src = openDoor[2];
			foundOne = true;
			playDoor();
 		};
 		
 		doorImg3.onclick = () => {
			doorImg3.src = openDoor[3];
			foundOne = false;
			playDoor();
 		};
 	   } else {
		openDoor[1] = "doorZero.png";
		openDoor[2] = "doorZero.png";
		openDoor[3] = "doorOne.png";
		
		doorImg1.onclick = () => {
			doorImg1.src = openDoor[1];
			foundOne = false;
			playDoor();
 		};
 		
 		doorImg2.onclick = () => {
			doorImg2.src = openDoor[2];
			foundOne = false;
			playDoor();
 		};
 		
 		doorImg3.onclick = () => {
			doorImg3.src = openDoor[3];
			foundOne = true;
			playDoor();
 		};
	}
}

//winning
 const gameOver = (str) =>{
 	if(str==='win'){
 	startButton.innerHTML = "You win! Refresh the page to play again?";
 	} else{
 	startButton.innerHTML = "You lost! Refresh to try again.";
 	}
 }
 
 console.log(randomOpenGenerator())