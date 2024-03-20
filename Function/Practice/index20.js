{
    let newfun = (n) =>{
            console.log("winding phase :" + n);
            if(n < 3){
                newfun(++n);
            }
            console.log("unwinding phase:" + n);
        }
        console.log((newfun(5)));
        console.log((newfun(15)));
        
}