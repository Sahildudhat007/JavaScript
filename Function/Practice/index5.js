// Enter year find its leap year or not.

{
    function lepyear(year){
        if(year%4==0){
            console.log(year + " is Leap Year");
        }
        else{
            console.log(year + " is Not Leap Year");
        }
    }
    console.log(lepyear(2021));
    console.log(lepyear(2024));
}