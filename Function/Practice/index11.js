// 1,2,4,8,16,...,n

{
    function squar(n){
        let m = 1;

        for(let i = 1; i <= n; i++){
            console.log(m);
            m = m * 2;
        }
    }
    console.log(squar(5));
}