// Enter one value find its divisible by 5 or not.

{
    function divisible(number){
        if(number%5==0){
            console.log(number + ": divisible by 5");
        }
        else{
            console.log(number + " : not divisible by 5");
        }
    }
    console.log(divisible(5));
    console.log(divisible(2));
    console.log(divisible(15));
}