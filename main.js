status = "";
song = "";

function preload(){
    song = loadSound("alert_sound.mp4");

}

function setup(){
    canvas = createCanvas(640, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){

    image(video, 0, 0, 640, 550);

    if(status = ""){
    document.getElementById("status").innerHTML = "Status: Baby Detected";

}
else{
    document.getElementById("status").innerHTML = "Status: Baby NOT Detected";
    song.play();

}

}

