function setup(){
    video = createCapture(VIDEO);
    video.size(2000, 500);

    canvas = createCanvas(500, 500);
    canvas.position(500, 600);

    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWrist +"leftWristY = "+ leftWristY);
        
        console.log("rightWristX = " + rightWrist +"rightWristY = "+ rightWristY);
        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;
    }
}

function draw() {
    background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Font size of text will be = "+ difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Shivank', 50, 400);
}