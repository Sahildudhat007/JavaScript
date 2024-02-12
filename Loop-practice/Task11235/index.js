{
    let a = 1;
    let b = 0;
    let c = a + b;
    let num = prompt("Number");
    // console.log(a);
    document.write(a,"\t");
    // console.log(b);
    for (let i = 1; i <= num; i++) {
        // console.log(c);
        document.write(c,"\t");
        b = a;
        a = c;
        c = a + b;
        // c = a + b;
        // a = b;
        // b = c;
    }
}