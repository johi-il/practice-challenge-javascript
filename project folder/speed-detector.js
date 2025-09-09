//creating  speed detector
function speed (kmh){
    if (kmh<=70){
        console.log("ok")// if the condition is true "ok" will be the output
    } else{
        const points = Math.floor((kmh-70)/5);//1 point for every 5kmh
        if (points>12){
            console.log("license suspended");
         }
         else {
            console.log(`warning ${points} points`);  //here we are calling back the expression above
         }
    }
}

speed(85);
speed(93);
speed (120);
speed(130);
speed(140);
