//creating  speed detector
let kmh=67
    if (kmh<=70){
        console.log("ok")// if the condition is true "ok" will be the output
    } else{
        const points = Math.floor(kmh/5);//1 point for every 5kmh
        if (points>=12){
            console.log("license suspended");
         }
         else {
            console.log(`warning ${points} point`);  //here we are calling back the expression above
         }
    }


