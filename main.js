lipstickx=0;
lipsticky=0;

function preload()
{
    lips=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqs71gAQy8wr9MUC-xUHi-NS72ayd6ACp2-kL4l-8Z1ebRJ3LCLMiHvAgKe_K2NnGt084&usqp=CAU');
}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    canvas.position(500,100);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
 console.log('model loaded');
}
function draw()
{
    image(video,0,0,400,400);
    image(lips,lipstickx,lipsticky,30,30);
}
function take_snapshot()
{
    save('kaushiki.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lipstickx=results[0].pose.nose.x-20;
        lipsticky=results[0].pose.nose.y+20;
       console.log("lips x="  +lipstickx);
       console.log("lips y="  +lipsticky);
    }
}
