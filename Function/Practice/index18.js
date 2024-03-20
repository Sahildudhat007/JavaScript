// Odd Number

{
    function odd(number){

        let t = 0;

        for(let i = 1; i <= number; i++){
            if(i%2!=0){
                console.log(i);
                t += i;
            }
        }
    }
    console.log(odd(30));
}