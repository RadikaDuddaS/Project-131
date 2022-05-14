 Status = "";
 Lamp_image = "";
 
 function preload() 
 {
     Lamp_image = loadImage(Lamp.jpg);
 }

 function setup()
 {
     canvas = createCanvas(640,350);
     canvas.position(350,200);
     object_detector = ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("Status").innerHTML = "Status: Detecting Object";
 }

 function modelLoaded()
     {
         console.log("Model Loaded!!");
         Status = true;
         object_detector.detect(Lamp_image,gotResults);
     }

     function gotResults(error,results)
     {
        if(error)
        {
            console.error(error);
        }
        console.log(results) 
     }

     function draw()
     {
        Image(Lamp_image,0,0,640,350);
     }

 

