{
    let perfect = (a) => {
        let n = 0;
        for (let i = 1; i < a; i++) {
            if (a % i == 0) {
                n = n + i;
                console.log(i);
            }
        }
        console.log(n);
        if (a == n) {
            console.log("This number is perfect" + n);
        }
        else {
            console.log("This number is not perfect" + n);
        }
    }
    console.log(perfect(496));
    console.log(perfect(8127));
}