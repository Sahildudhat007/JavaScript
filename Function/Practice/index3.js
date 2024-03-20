// Enter one value find its divisible by 5 and 3 or not.

{
    function divisible(number){
        if(number%15==0){
            console.log(number + ": divisible by 15");
        }
        else{
            console.log(number + " : not divisible by 15");
            }
        }
        console.log(divisible(15));
        console.log(divisible(10));
}