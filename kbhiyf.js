let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

let zxc = new Image();
zxc.src = "zxc.jpg";

let zxc3 = new Image();
zxc3.src = "zxc3.jpg";

let gameover = new Image();
gameover.src = "gameover.jpg";

let a = setInterval(function(){
    x1 = Math.floor(Math.random()*800);
    y1 = Math.floor(Math.random()*400);
    x2 = Math.floor(Math.random()*800);
    y2 = Math.floor(Math.random()*400);
    
    ctx.clearRect(0, 0, 900, 500);
    ctx.drawImage(zxc, x1, y1, 100, 100);
    ctx.drawImage(zxc3, x2, y2, 100, 100);
    canvas.addEventListener("mousedown", click)
}, 1000)

let count = 0;
let award1 = document.getElementById("award1")
award1.style.opacity = "20%"
let award2 = document.getElementById("award2")
award2.style.opacity = "20%"
let award3 = document.getElementById("award3")
award3.style.opacity = "20%"


function click(event){
    const rec = canvas.getBoundingClientRect();
    xclick = event.clientX - rec.left; 
    yclick = event.clientY - rec.top;
    

    if(xclick >= x1 && xclick <= x1+100 && yclick >= y1 && yclick <=y1+100){
        count++;
        x1=0;
        y1=0;
        }
    if(xclick >= x2 && xclick <= x2+100 && yclick >= y2 && yclick <=y2+100){
        clearInterval(a);
        ctx.clearRect(0, 0, 900, 500);
        ctx.drawImage(gameover, 0, 0, 900, 500);

        }
    document.getElementById("count").innerHTML = " Ваши зароботаные яблоки " +count;
    if(count==1){
        award1.style.opacity = "100%"}
    if(count==2){
        award2.style.opacity = "100%" }
    if(count==3){
        award3.style.opacity = "100%"
        
    }
   
    
}
