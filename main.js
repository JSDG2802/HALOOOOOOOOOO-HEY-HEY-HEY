var izquierda = 0
var derecha = 0
var diferencia = 0
var nose_Y = 0
var nose_X = 0
function setup()
{
   video = createCapture(VIDEO);
   video.size(550,550);
   canvas = createCanvas(550,500);
   canvas.position(1127,170);
   PoseNet = ml5.poseNet(video,modelo_cargado);
   PoseNet.on("pose",obtain_poses);
}

function draw()
{
    background("#171717");
    fill("#34FF7E");
    stroke("#1FA750")
    square(Math.floor(nose_X),Math.floor(nose_Y),diferencia);
    document.getElementById("cuadro_cuadrado_lado").innerHTML ="AL FINNNNNNNNNNNNNNN :D:D:D:D:D "+diferencia;
}
function modelo_cargado()
{
  console.log("model loaded");
}
function obtain_poses(results)
{
  console.log(results);
  if(results.length>0)
  {
    console.log("resultados inutiles despues de programar");
     nose_X = results[0].pose.nose.x
     nose_Y = results[0].pose.nose.y
     console.log("nose_X"+nose_X+"nose_Y"+nose_Y)
     derecha = results[0].pose.rightWrist.x
     izquierda = results[0].pose.leftWrist.x
     diferencia = floor(izquierda - derecha)
  }
}