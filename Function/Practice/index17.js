{
    function term(n) {

        let t1 = 1;
        let t2 = 0;
        let nextterm = t1 + t2;

        for(let i = 1; i <= n; i++){
            console.log(nextterm);
            t2 = t1;
            t1 = nextterm;
            nextterm = t1 + t2;
        }
    }
    console.log(term(10));
}