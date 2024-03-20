// 1,4,12,32,80,...,n

{
    function squar(n){
        let m = 1;

        for(let i = 1; i <= n; i++){
            console.log(m * i);
            m = m * 2;
        }
    }
    console.log(squar(5));
}