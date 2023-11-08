const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
 
const car = new Car(canvas.width/2,canvas.height);
const obstacle = new Obstacle(10,10,50,50)
const img  = document.querySelector("img")
 
 
function animate() {
    canvas.height = window.innerHeight - 50
    car.Update()
    car.draw(ctx,img);
    obstacle.draw(ctx)
    console.log("Started...")
    requestAnimationFrame(animate);
}
animate()

 
 
