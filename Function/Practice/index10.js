// 1,4,3,16,5,...,n

{
    function squar(n){
        for(let i = 1; i <= n; i++){
            if(i%2!=1){
                console.log(i*i);
            }
            else{
                console.log(i);
            }
        }
    }
    console.log(squar(5));
    console.log(squar(10));
}
