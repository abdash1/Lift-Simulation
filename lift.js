let floorQueue=[];
let moving=false;
let current=0;

function moveLift(floor){
    //check floor if alreaddy in quwueu
    if(!floorQueue.includes(floor)){
        floorQueue.push(floor);
    }

    if(!moving){
        sortQueue();
        processQueue();
    }
}

function sortQueue(){
    if(floorQueue.length>0){
        //check if lift is beneath the requestedd floor
        if(current<Math.min(...floorQueue)){
            //ascending
            floorQueue.sort((a, b)=>a - b);
        } else{
            //descending
            floorQueue.sort((a, b)=>b - a);
        }
    }
}

function processQueue(){
    //check if queue empty
    if(floorQueue.length===0){
        moving=false;
        return;
    }

    const next=floorQueue.shift();
    moving=true;

    //calclate lift positiin
    const lift=document.getElementById('lift');
    const floorHeight=100;
    const liftPosition=next*floorHeight;

    lift.style.bottom=liftPosition+'px';

    setTimeout(()=>{
        current=next;

        moving=false;
        sortQueue();
        processQueue();
    }, 5000);
}
