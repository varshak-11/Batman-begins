

function preload(){
  thunder1.loadImage("1.png")
thunder2.loadImage("2.png")
thunder3.loadImage("3.png")
thunder4.loadImage("4.png")

}


function setup(){
   var maxDrops=100;  
var thunder;
var man;
var rain; 


}

function draw(){
    



    
    for(var i=0; i<maxDrops; ){
      drops.push(new createDrop(random(0,400), random(0,400)));  
    }

    rand = Math.round(random(1,4));
        if(frameCount%80===0){
            thunderCreatedFrame=frameCount;

            thunder = createSprite(random(10,370), random(10,30), 10, 10);
            switch(rand){
                case 1: thunder.addImage(thunder1);
                break;
                case 2: thunder.addImage(thunder2);
                break;
                case 3: thunder.addImage(thunder3);
                break;
                case 4: thunder.addImage(thunder4);
                break;
                
            }
        
    }

}   

