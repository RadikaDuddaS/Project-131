 Status = "";
 Chair_image = "";
 
 function preload() 
 {
     Chair_image = loadImage(Chair.jpg);
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
         object_detector.detect(Chair_image,gotResults);
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
        Image(Chair_image,0,0,640,350);
     }

 

