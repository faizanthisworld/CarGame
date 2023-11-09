const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
 
 
const topBtn = document.querySelector("#top")
const bottomBtn = document.querySelector("#bottom")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")

document.addEventListener("touchstart", () => {
    alert("Hello world")
})

const car = new Car(canvas.width/2,canvas.height,{left : leftBtn,top:topBtn,bottom:bottomBtn,right:rightBtn});
const obstacle = new Obstacle(10,10,50,50)
const img  = document.querySelector("img")
 
const btnControls= new BtnControls(leftBtn,rightBtn,topBtn,bottomBtn) 

 
function animate() {
    canvas.height = window.innerHeight - 200
    canvas.width = window.innerWidth - 20
    
    car.Update()
    car.draw(ctx,img);
    obstacle.draw(ctx)
    console.log("Started...")
    requestAnimationFrame(animate);
}
animate()

 
 
